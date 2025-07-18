import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import WaterDroplets from './WaterDroplets';

const backgroundImages = [
  '/grp1.png',
  '/grp2.jpeg',
  '/grp3.jpeg',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Background Image Crossfade */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
            animate={{ opacity: index === currentImage ? 0.4 : 0 }}
            initial={false}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full transition"
        aria-label="Previous Image"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full transition"
        aria-label="Next Image"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Water Droplets */}
      <WaterDroplets />

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center justify-center h-full pt-24 md:pt-40"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
            Transforming Water Treatment with
            <span className="text-blue-600"> Hydrodynamic Cavitation</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mt-4 mb-10 max-w-2xl">
            Pioneering sustainable water treatment solutions through innovative technology
            and scientific excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="solutions"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Explore Solutions
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center text-blue-300 hover:text-blue-500 cursor-pointer"
        >
          <span className="text-sm mb-2 text-blue-600">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
