// src/components/FloatingButtons.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faComments } from "@fortawesome/free-solid-svg-icons";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const email = localStorage.getItem("userEmail") || "hydrocawach@gmail.com"; // fallback

  const handleDiscussClick = () => {
    if (!isLoggedIn) {
      navigate("/solutions-auth");
    } else {
      window.location.href = `mailto:hydrocawach@gmail.com?subject=Water Solution Inquiry&cc=${email}`;
    }
  };

  const handleContactClick = () => {
    if (!isLoggedIn) {
      navigate("/solutions-auth");
    } else {
      window.location.href = "tel:+918624984991";
    }
  };

  return (
    <div className="floating-buttons">
      <button className="float-btn" onClick={handleContactClick}>
        <FontAwesomeIcon icon={faPhone} />
        <span>Contact Us</span>
      </button>
      <button className="float-btn discuss-btn" onClick={handleDiscussClick}>
        <FontAwesomeIcon icon={faComments} />
        <span>Discuss Needs</span>
      </button>
    </div>
  );
};

export default FloatingButtons;
