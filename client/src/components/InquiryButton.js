// components/InquiryButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const InquiryButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/inquiry')}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50 transition"
    >
      <FaEnvelopeOpenText className="text-xl" />
      <span className="font-medium hidden sm:inline">Make an Inquiry</span>
    </button>
  );
};

export default InquiryButton;
