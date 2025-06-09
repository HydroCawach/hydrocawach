import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Core Components
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import WhyUs from './components/WhyUs';
import Impact from './components/Impact';
import Collaborate from './components/Collaborate';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import InteractiveMap from './components/InteractiveMap';
import './index.css';

// Auth Components
import Login from './auth/Login';
import Signup from './auth/Signup';
import SolutionsAuth from './auth/SolutionsAuth';

// Solution Pages
import HandpumpWaterDisinfection from './pages/HandpumpWaterDisinfection';
import LakeAndPondRejuvenation from './pages/LakeAndPondRejuvenation';
import IndustrialEffluentPreTreatment from './pages/IndustrialEffluentPreTreatment';
import CoolingTowerTreatment from './pages/CoolingTowerTreatment';
import SewageWaterTreatment from './pages/SewageWaterTreatment';
import SwimmingPoolWaterTreatment from './pages/SwimmingPoolWaterTreatment';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <Hero />
              <About />
              <Solutions />
              <WhyUs />
              <InteractiveMap />
              <Impact />
              <Collaborate />
              <Footer />
            </div>
          }
        />

        {/* Auth Routes */}
        <Route path="/auth" element={<SolutionsAuth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Solution Detail Pages */}
        <Route
          path="/solutions/handpump-water-disinfection"
          element={<HandpumpWaterDisinfection />}
        />
        <Route
          path="/solutions/lake-and-pond-rejuvenation"
          element={<LakeAndPondRejuvenation />}
        />
        <Route
          path="/solutions/industrial-effluent-pre-treatment"
          element={<IndustrialEffluentPreTreatment />}
        />
        <Route
          path="/solutions/cooling-tower-treatment"
          element={<CoolingTowerTreatment />}
        />
        <Route
          path="/solutions/sewage-water-treatment"
          element={<SewageWaterTreatment />}
        />
        <Route
          path="/solutions/swimming-pool-water-treatment"
          element={<SwimmingPoolWaterTreatment />}
        />
      </Routes>
    </Router>
  );
}

export default App;
