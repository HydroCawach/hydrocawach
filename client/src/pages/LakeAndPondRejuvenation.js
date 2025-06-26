import React from 'react';
import InteractiveMap from '../components/InteractiveMap';
import WhatsAppConnect from '../components/whatsappConnect';
import InquiryButton from '../components/InquiryButton';

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
  <div className="bg-white text-gray-800 min-h-screen relative overflow-x-hidden">
    <PageNavbar />

    {/* Intro Section */}
    <div className="pt-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8">
        <img
          src="/BinduLake.png"
          alt="Bindu Lake"
          className="w-[250px] h-auto rounded-xl shadow-md"
        />
        <p className="text-lg text-justify leading-relaxed">
          The lakes and pond water quality in the Indian context has become one of the major challenges due to
          water flow restrictions, reduced oxygen solubility, and the overgrowth of water hyacinth. Our Hydrodynamic
          Cavitation Technology improves water quality without the use of chemicals by passing water through GSTR reactors.
          These reactors generate microjets and bubbles that destroy harmful microorganisms. The process significantly reduces
          BOD and COD, removes foul smells, halts hyacinth growth, and clears the water while preserving aquatic life.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-16">
        {[
          {
            title: 'Cavitation in Action',
            image: '/pump_working.png',
            text: `Our cavitation system uses high-speed microjets and imploding microbubbles to destroy harmful
            microorganisms, including algae and pathogens. This improves dissolved oxygen levels and breaks down
            organic waste without chemicals, ensuring a safe environment for aquatic life.`
          },
          {
            title: 'Water Quality Restored',
            image: '/lake1.png',
            text: `The reduction in BOD (Biochemical Oxygen Demand) and COD (Chemical Oxygen Demand) ensures
            visibly cleaner water. The system removes green layers, foul odors, and stops the growth of hyacinth,
            enabling natural biodiversity to return to the water body.`
          },
          {
            title: 'News & Results',
            image: '/news.png',
            text: `Our eco-restoration efforts have gained wide recognition and media attention. Success stories
            from rejuvenated lakes and ponds highlight the impact of this chemical-free, sustainable solution on
            local communities and ecosystems.`
          }
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <img src={card.image} alt={card.title} className="w-full object-contain h-[250px]" />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
              <p className="text-base text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Map */}
      <div className="relative max-w-7xl mx-auto px-4">
        <InteractiveMap />
      </div>
    </div>

    <WhatsAppConnect />
    <InquiryButton />
  </div>
);

export default LakeAndPondRejuvenation;
