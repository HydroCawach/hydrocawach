// src/components/FloatingButtons.js
import React from "react";
import "./FloatingButtons.css"; // You can create this for styling or use Tailwind inline if preferred
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faComments } from "@fortawesome/free-solid-svg-icons";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a href="tel: +91 8624984991" className="float-btn">
        <FontAwesomeIcon icon={faPhone} />
        <span>Contact Us</span>
      </a>
      <a
        href="mailto:hydrocawach@gmail.com?subject=Water Solution Inquiry"
        className="float-btn discuss-btn"
      >
        <FontAwesomeIcon icon={faComments} />
        <span>Discuss Needs</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
