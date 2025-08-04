import React, { useState, useRef, useEffect } from "react";
import ChatSidebar from "../components/ChatSidebar";
import SmartMenu from "../components/SmartMenu";
import SearchDropdown from "../components/SearchDropdown";
import "../styles/explore.css";
import { FiMic, FiPlus, FiSend } from "react-icons/fi";
import { FaQuestion } from "react-icons/fa";

const Explore = () => {
  const [inputText, setInputText] = useState("");
  const [showSmartMenu, setShowSmartMenu] = useState(false);
  const [showUploadOptions, setShowUploadOptions] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const uploadMenuRef = useRef(null);
  const imageInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        uploadMenuRef.current &&
        !uploadMenuRef.current.contains(event.target)
      ) {
        setShowUploadOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSmartToggle = () => setShowSmartMenu((prev) => !prev);

  const handleSend = () => {
    if (inputText.trim() !== "") {
      const userMessage = { role: "user", text: inputText };
      const botMessage = {
        role: "bot",
        text: "✅ Got it! I'm processing your request...",
      };
      setMessages((prev) => [...prev, userMessage, botMessage]);
      setInputText("");
      setShowSmartMenu(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setInputText("");
    setShowSmartMenu(false);
    setShowUploadOptions(false);
  };

  const handleSelectSmartQuestion = (question) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "bot", text: `Here's some helpful info about: "${question}"` },
    ]);
    setShowSmartMenu(false);
  };

  const handleFileUpload = (type) => {
    if (type === "a photo") {
      cameraInputRef.current.click();
    } else if (type === "an image") {
      imageInputRef.current.click();
    } else if (type === "a file") {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setMessages((prev) => [
          ...prev,
          {
            role: "user",
            image: reader.result,
            text: file.name,
          },
        ]);
      };
      reader.readAsDataURL(file);
    } else {
      setMessages((prev) => [
        ...prev,
        { role: "user", text: `📎 Uploaded ${file.name}` },
      ]);
    }
  };

  return (
    <div className="explore-container">
      <ChatSidebar
        onSearchClick={() => setShowSearchDropdown(true)}
        onNewChat={handleNewChat}
      />

      {showSearchDropdown && (
        <SearchDropdown onClose={() => setShowSearchDropdown(false)} />
      )}

      <div className="explore-main">
        {messages.length === 0 && inputText === "" && (
          <h2 className="explore-title">Smart Health Management</h2>
        )}

        <div className="chat-content">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.role}`}>
              <div className="chat-bubble">
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="upload"
                    className="uploaded-preview"
                  />
                )}
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-box">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask anything about your health"
            value={inputText}
            onChange={handleInputChange}
          />
          <div className="input-container">
            <FiPlus
              className="icon-btn large-icon"
              onClick={() => setShowUploadOptions((prev) => !prev)}
            />
            <FiMic className="icon-btn large-icon" />

            {inputText === "" ? (
              <span className="smart-label" onClick={handleSmartToggle}>
                Smart question <FaQuestion />
              </span>
            ) : (
              <FiSend
                className="icon-btn large-icon send"
                onClick={handleSend}
              />
            )}
          </div>
        </div>

        {showUploadOptions && (
          <div className="upload-menu" ref={uploadMenuRef}>
            <p onClick={() => handleFileUpload("a photo")}>📷 Take a picture</p>
            <p onClick={() => handleFileUpload("an image")}>🖼️ Gallery</p>
            <p onClick={() => handleFileUpload("a file")}>🗂️ Files</p>
          </div>
        )}

        {showSmartMenu && (
          <SmartMenu
            onClose={handleSmartToggle}
            onSelectQuestion={handleSelectSmartQuestion}
          />
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={imageInputRef}
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />

      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={cameraInputRef}
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Explore;
