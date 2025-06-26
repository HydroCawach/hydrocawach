import React from 'react';
import InteractiveMap from '../components/InteractiveMap';
import WhatsAppConnect from '../components/whatsappConnect';
import InquiryButton from '../components/InquiryButton';

const PageNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 h-24 overflow-hidden">
      <img
        src="/Hydrocawach_logo.png"
        alt="HydroCawach Logo"
        className="h-36 w-auto object-contain"
      />
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-blue-600 text-lg md:text-2xl font-bold">
        Handpump Water Disinfection
      </h1>
    </nav>
  );
};

const HandpumpWaterDisinfection = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen relative overflow-x-hidden">
      <PageNavbar />

      <div className="pt-24 px-4">
        {/* 📸 Pump Image + Intro Text */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 p-6">
          {/* Left Image - 1/4th width */}
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              src="/pump.png"
              alt="Pump"
              className="w-full max-w-[250px] h-auto rounded-lg shadow-md object-contain"
            />
          </div>

          {/* Right Text - 3/4th width */}
          <div className="w-full md:w-3/4 text-lg text-justify pt-10">
            <p>
              In India and other developing countries, hand-pumps are the primary devices used to get groundwater available.
              Considering the lack of awareness, low income, and unavailability of continuous supply of electricity,
              people from rural areas can’t afford water treatment facilities and hence are prone to water borne diseases.
              We have successfully implemented at pilot scale followed by field trials at 15 villages in Maharashtra.
              This modification in the pumping system resulted in ~95% water disinfection (~99.87% for E.Coli).
              Our device doesn’t require electricity and chemicals to operate.
              It is a one-time installation process & maintenance free.
            </p>
          </div>
        </div>


        {/* 💡 Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 mb-16">
          {[
            {
              title: 'How It Works',
              image: '/pump_working.png',
              text: 'Our device forces water through a narrow chamber where cavitation bubbles form and collapse. This intense energy breaks microbial cell walls, as shown. Microbes like E. Coli are disrupted without chemicals. The entire process is powered by flow, not electricity.'
            },
            {
              title: 'Empowering Rural Communities',
              image: '/pumpbg.png',
              text: 'Deployed on existing handpumps, our system provides clean water without electricity. It is operated effortlessly by locals, especially women. It helps reduce waterborne diseases in rural areas. This image shows one of our pilot installations in a village.'
            },
            {
              title: 'Patented Technology',
              image: '/pump_patent.png',
              text: 'Certified lab tests confirm up to 99.87% disinfection of E.Coli. Our technology is validated under government field trials. The document displayed is an official test report. It proves real-world effectiveness and compliance with water safety norms.'
            }
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Centered Image with no crop */}
              <div className="bg-gray-100 flex justify-center items-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-3 text-center">{card.title}</h2>
                <p className="text-base text-gray-700 text-justify">{card.text}</p>
              </div>
            </div>
          ))}
        </div>


        {/* 🗺️ Interactive Map */}
        <div className="relative max-w-7xl mx-auto px-4">
          <InteractiveMap />
        </div>
      </div>

      <WhatsAppConnect />
      <InquiryButton />
    </div>
  );
};

export default HandpumpWaterDisinfection;
