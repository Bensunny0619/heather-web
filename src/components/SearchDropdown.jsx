// components/SearchDropdown.js
import React from "react";
import { FaRegCommentDots } from "react-icons/fa";

const SearchDropdown = ({ onClose }) => {
  const chats = [
    "Jane recent medication",
    "Jane recent medication",
    "Jane recent medication",
    "Jane recent medication",
  ];

  return (
    <div className="search-dropdown">
      <div className="search-header">
        <input className="search-input" placeholder="Search chat" />
        <p className="search-close-btn" onClick={onClose}>×</p>
      </div>
      <div className="search-body">
        <div className="search-new-chat">
          <FaRegCommentDots style={{ marginRight: "0.5rem" }} />
          New Chat
        </div>
        <div className="search-today-label">Today</div>
        {chats.map((chat, idx) => (
          <div key={idx} className="search-chat-item">
            <span>💬</span>
            <span>{chat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDropdown;
