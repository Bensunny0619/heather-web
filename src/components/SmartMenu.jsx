import React from "react";
import "../styles/explore.css";

const SmartMenu = ({ onClose, onSelectQuestion }) => {
  const questions = [
    "What does my lab result mean?",
    "Set a medication reminder",
    "Check symptoms",
    "Give me a health tip",
  ];

  return (
    <div className="smart-menu">
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <ul className="smart-menu-options">
        {questions.map((q, i) => (
          <li key={i} onClick={() => onSelectQuestion(q)}>{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default SmartMenu;
