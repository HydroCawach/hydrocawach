import React from 'react';
import { FaPhoneAlt, FaComments } from 'react-icons/fa';
import InteractiveMap from '../components/InteractiveMap';
import WhatsAppConnect from '../components/whatsappConnect';
const PageNavbar = () => (
  <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 h-24 overflow-hidden">
    <img src="/Hydrocawach_logo.png" alt="HydroCawach Logo" className="h-36 w-auto object-contain" />
    <h1 className="absolute left-1/2 transform -translate-x-1/2 text-blue-600 text-lg md:text-2xl font-bold">
      Industrial Effluent Pre‑Treatment
    </h1>
  </nav>
);

const IndustrialEffluentPreTreatment = () => (
  <div className="bg-white text-gray-800 min-h-screen relative overflow-x-hidden">
    <PageNavbar />

    <div className="pt-24 px-4">
      <div className="p-8 max-w-5xl mx-auto">
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Reduce load on your ETP and stay ahead of discharge norms with our compact cavitation‑aided
          pre‑treatment modules that slash COD, colour and toxicity right at the source.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-16">
        {[
          {
            type: 'image',
            title: 'Real‑Time COD Knock‑down',
            image: '/treatment.jpg',
            text: 'Watch our inline reactor cut COD by up to 70 % in a single pass.'
          },
          {
            type: 'image',
            title: 'Compliance Made Easy',
            image: '/compliance.jpg',
            text: 'Meet CPCB & EPA discharge limits without expensive chem‑dosing or large footprints.'
          },
          {
            type: 'image',
            title: 'ROI Under 18 Months',
            image: '/roi.jpg',
            text: 'Save on chemical bills, penalties and freshwater intake — payback in record time.'
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

    <WhatsAppConnect />
  </div>
);

export default IndustrialEffluentPreTreatment;
