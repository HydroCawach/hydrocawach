import React from 'react';
import { FaPhoneAlt, FaComments } from 'react-icons/fa';
import InteractiveMap from '../components/InteractiveMap';

const PageNavbar = () => (
  <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 h-24 overflow-hidden">
    <img src="/Hydrocawach_logo.png" alt="HydroCawach Logo" className="h-36 w-auto object-contain" />
    <h1 className="absolute left-1/2 transform -translate-x-1/2 text-blue-600 text-lg md:text-2xl font-bold">
      Swimming Pool Treatment
    </h1>
  </nav>
);

const SwimmingPoolTreatment = () => (
  <div className="bg-white text-gray-800 min-h-screen relative">
    <PageNavbar />

    <div className="pt-24 px-4">
      <div className="p-8 max-w-5xl mx-auto">
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Enjoy crystal‑clear, odour‑free pools with up to 70 % less chlorine. Our cavitation‑based
          advanced‑oxidation system destroys chloramines and prevents algae without harsh chemicals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-16">
        {[
          {
            type: 'image',
            title: 'Instant Clarity',
            image: '/swimming_process.png',
            text: 'High‑energy micro‑bubbles strip oils & sunscreens, leaving water sparkling in minutes.'
          },
          {
            type: 'image',
            title: 'Healthier Swims',
            image: '/clean.jpg',
            text: 'No red eyes, no chlorine smell — swimmers love the naturally balanced water.'
          },
          {
            type: 'image',
            title: 'Operational Savings',
            image: '/swim.png',
            text: 'Lower chemical top‑ups and backwash frequency translate to real cost savings.'
          }
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            {card.type === 'video' ? (
              <video className="w-full h-64 object-cover" src={card.video} autoPlay loop muted playsInline />
            ) : (
              <img src={card.image} alt={card.title} className="w-full h-64 object-cover" />
            )}
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
              <p className="text-base text-gray-700">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <InteractiveMap />
      </div>
    </div>

    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[9999]">
      <a href="tel:+918624984991" className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 flex items-center space-x-2">
        <FaPhoneAlt />
        <span>Contact Us</span>
      </a>
      <a
        href="mailto:hydrocawach@gmail.com?subject=Pool Treatment Inquiry"
        className="bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 flex items-center space-x-2"
      >
        <FaComments />
        <span>Discuss Your Needs</span>
      </a>
    </div>
  </div>
);

export default SwimmingPoolTreatment;
