import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { getAuth } from 'firebase/auth';


const ContactForm = () => {
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setFromEmail(email);
    } else {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user && user.email) {
        setFromEmail(user.email);
        localStorage.setItem("userEmail", user.email); // cache it
      }
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "your_service_id", // from EmailJS
      "your_template_id", // from EmailJS
      {
        to_email: "hydrocawach@gmail.com",
        from_email: fromEmail,
        message: message,
      },
      "your_user_id" // from EmailJS
    )
      .then((result) => {
        alert("Message sent successfully!");
        setMessage("");
      })
      .catch((error) => {
        console.error("Email Error:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block mb-1">To</label>
          <input
            type="email"
            value="hydrocawach@gmail.com"
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">From</label>
          <input
            type="email"
            value={fromEmail}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Describe your needs</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 border rounded"
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
