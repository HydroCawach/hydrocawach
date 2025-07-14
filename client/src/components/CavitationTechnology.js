import React from 'react';
import WhatsAppConnect from '../components/whatsappConnect';
import InquiryButton from '../components/InquiryButton';

// Reusable Navbar Component
const PageNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 h-24 overflow-hidden">
      <img
        src="/Hydrocawach_logo.png"
        alt="HydroCawach Logo"
        className="h-36 w-auto object-contain"
      />
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-blue-600 text-lg md:text-2xl font-bold">
        Hydrodynamic Cavitation Technology
      </h1>
    </nav>
  );
};

const CavitationTechnology = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen relative overflow-x-hidden">
      <PageNavbar />

      <div className="pt-28 px-4 max-w-5xl mx-auto">


        <video
          src="/vid3.mp4"
          controls
          className="w-full rounded-lg shadow-lg mb-8"
        />

        <section className="text-lg space-y-4">
          <p>
            At Hydrocawach Technologies Pvt. Ltd., we harness the power of Hydrodynamic Cavitation—
            a cutting-edge, chemical-free, and energy-efficient technology revolutionizing water and wastewater treatment.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">How It Works</h2>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Text section */}
            <div className="md:w-1/2 space-y-4">
              <p>
                Hydrodynamic cavitation involves the controlled formation, growth, and violent collapse of microscopic bubbles in water.
                When water passes through specially designed cavitation devices like venturi tubes or orifice plates at high velocity,
                bubbles collapse violently, producing intense microjets and shockwaves.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Microbial Destruction:</strong> Physically disrupts microbial cells, reducing pathogens like E. Coli.</li>
                <li><strong>Reduction in BOD:</strong> Destroys organic contaminants and microorganisms, improving oxygen levels.</li>
                <li><strong>OH Radical Generation:</strong> Produces reactive radicals that break down complex pollutants, reducing COD.</li>
                <li><strong>Algae Removal:</strong> Breaks algal cells for visibly clearer and healthier water bodies.</li>
              </ul>
            </div>

            {/* Image section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/pump_working.png"
                alt="Pump Working Diagram"
                className="w-full max-w-md rounded-lg shadow-md object-contain"
              />
            </div>
          </div>


          <h2 className="text-2xl font-semibold text-blue-600 mt-6">Why Choose Hydrocawach's Cavitation Technology?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>⚡ No Chemicals, No Filters</li>
            <li>⚙️ Low Operational Costs</li>
            <li>♻️ Eco-Friendly and Sustainable</li>
            <li>🔬 Scientifically Proven and Field-Tested</li>
          </ul>

          <p className="mt-6">
            Whether it’s for handpump disinfection, lake rejuvenation, or industrial water, our cavitation tech is a powerful solution for clean, safe, and sustainable water.
          </p>
        </section>
      </div>

      {/* Floating Components */}
      <WhatsAppConnect />
      <InquiryButton />
    </div>
  );
};

export default CavitationTechnology;
