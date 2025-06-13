import React from 'react';
import { FaPhoneAlt, FaComments } from 'react-icons/fa';
import InteractiveMap from '../components/InteractiveMap';

// ✅ Move PageNavbar above component but after imports
const PageNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 h-24 overflow-hidden">
      {/* Logo on the left */}
      <img
        src="/Hydrocawach_logo.png"
        alt="HydroCawach Logo"
        className="h-36 w-auto object-contain"
      />

      {/* Centered Page Title */}
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-blue-600 text-lg md:text-2xl font-bold">
        Handpump Water Disinfection
      </h1>
    </nav>
  );
};

const HandpumpWaterDisinfection = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen relative">
      {/* Fixed Custom Navbar */}
      <PageNavbar />

      {/* Content with top padding to account for fixed navbar height */}
      <div className="pt-24 px-4">
        <div className="p-8 max-w-5xl mx-auto">
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            At Hydrocawach Technologies, we specialize in innovative water disinfection solutions that bring safe, clean water to rural communities.
            Our patented hydrodynamic cavitation technology ensures pathogen-free water straight from the source.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-16">
          {[
            {
              type: 'video',
              title: 'How It Works',
              video: '/vid.mp4',
              text: 'Watch how our hydrodynamic cavitation system disinfects water in real time without any chemicals.'
            },
            {
              type: 'image',
              title: 'Rural Impact',
              image: '/rural.jpeg',
              text: 'Installed in villages and schools, improving public health by reducing waterborne diseases.'
            },
            {
              type: 'image',
              title: 'Sustainable Innovation',
              image: '/sustainable.jpeg',
              text: 'Zero electricity, low maintenance, and eco-friendly — ideal for off-grid communities.'
            }
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              {card.type === 'video' ? (
                <video
                  className="w-full h-64 object-cover"
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
                <p className="text-base text-gray-700">{card.text}</p>
              </div>
            </div>
          ))}
        </div>


        {/* Interactive Map */}
        <div className="relative max-w-7xl mx-auto px-4">
          <InteractiveMap />
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[9999]">
        <a
          href="tel:+91 8624984991"
          className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          <FaPhoneAlt />
          <span>Contact Us</span>
        </a>
        <a
          href="mailto:hydrocawach@gmail.com?subject=Water Solution Inquiry"
          className="bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 flex items-center space-x-2"
        >
          <FaComments />
          <span>Discuss Your Needs</span>
        </a>
      </div>
    </div>
  );
};

export default HandpumpWaterDisinfection;
