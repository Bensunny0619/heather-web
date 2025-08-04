import React from "react";
import { FaRegCommentDots, FaSearch } from "react-icons/fa";
import "../styles/explore.css";

const ChatSidebar = ({ onSearchClick, onNewChat }) => {
  return (
    <div className="chat-sidebar">
      <div className="sidebar-btn" onClick={onNewChat}>
        <FaRegCommentDots className="sidebar-icon" />
        New Chat
      </div>
      
      <div className="sidebar-btn" onClick={onSearchClick}>
        <FaSearch className="sidebar-icon" /> Search Chat
      </div>

      <div className="chat-list">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="chat-list-item">
            Jane recent medication
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
