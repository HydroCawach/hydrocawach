import React from 'react';
import { FaPhoneAlt, FaComments } from 'react-icons/fa';
import InteractiveMap from '../components/InteractiveMap';

// ✅ Navbar component
const PageNavbar = () => (
  <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 h-24 overflow-hidden">
    <img src="/Hydrocawach_logo.png" alt="HydroCawach Logo" className="h-36 w-auto object-contain" />
    <h1 className="absolute left-1/2 transform -translate-x-1/2 text-blue-600 text-lg md:text-2xl font-bold">
      Lake &amp; Pond Rejuvenation
    </h1>
  </nav>
);

const LakeAndPondRejuvenation = () => (
  <div className="bg-white text-gray-800 min-h-screen relative">
    <PageNavbar />

    {/* content */}
    <div className="pt-24 px-4">
      <div className="p-8 max-w-5xl mx-auto">
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Our eco‑restoration program revives stagnant lakes and ponds using in‑situ aeration, natural
          bio‑remediation and floating wetlands — returning biodiversity and crystal‑clear water to local
          communities.
        </p>
      </div>

      {/* info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-16">
        {[
          {
            type: 'image',
            title: 'Bio‑Remediation in Action',
            image: '/processbio.png',
            text: 'See how aeration & beneficial microbes break down sludge and eliminate foul odours.'
          },
          {
            type: 'image',
            title: 'Before vs After',
            image: '/before_after.jpeg',
            text: 'Success story: a 6‑acre pond transformed from eutrophic to thriving within six months.'
          },
          {
            type: 'image',
            title: 'Floating Wetlands',
            image: '/wetland.jpeg',
            text: 'Native plants on modular rafts polish nutrients while creating habitat for birds and fish.'
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

      {/* interactive map */}
      <div className="relative max-w-7xl mx-auto px-4">
        <InteractiveMap />
      </div>
    </div>

    {/* floating buttons */}
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[9999]">
      <a href="tel:+918624984991" className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 flex items-center space-x-2">
        <FaPhoneAlt />
        <span>Contact Us</span>
      </a>
      <a
        href="mailto:hydrocawach@gmail.com?subject=Lake & Pond Rejuvenation Inquiry"
        className="bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 flex items-center space-x-2"
      >
        <FaComments />
        <span>Discuss Your Needs</span>
      </a>
    </div>
  </div>
);

export default LakeAndPondRejuvenation;
