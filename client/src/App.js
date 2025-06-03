import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import WhyUs from './components/WhyUs';
import Impact from './components/Impact';
import Collaborate from './components/Collaborate';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Import the new InteractiveMap component
import InteractiveMap from './components/InteractiveMap';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <WhyUs />

      {/* 👇 Add the InteractiveMap component here */}
      <section id="interactive-map" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center my-8">
          Interactive Map
        </h2>
        <div className="container mx-auto px-4">
          <InteractiveMap />
        </div>
      </section>

      <Impact />
      <Collaborate />
      <Footer />
    </div>
  );
}

export default App;
