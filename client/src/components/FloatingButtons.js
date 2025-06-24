// src/components/FloatingButtons.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faComments } from "@fortawesome/free-solid-svg-icons";
import "./FloatingButtons.css";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4ZlPmfhj_YG9fKrnj-jam8XogvAt3lS0Cej4b7JpBv3cilg/viewform?usp=header";

const FloatingButtons = () => {
  const goToForm = () => {
    // ‑‑ replace `_blank` with `_self` if you want the form in the same tab
    window.open(FORM_URL, "_blank");
  };

  return (
    <div className="floating-buttons">
      <button className="float-btn" onClick={goToForm}>
        <FontAwesomeIcon icon={faPhone} />
        <span>Contact&nbsp;Us</span>
      </button>

      <button className="float-btn discuss-btn" onClick={goToForm}>
        <FontAwesomeIcon icon={faComments} />
        <span>Discuss&nbsp;Needs</span>
      </button>
    </div>
  );
};

export default FloatingButtons;
