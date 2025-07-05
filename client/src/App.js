import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Technology from './components/Technology';

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
import CavitationTechnology from './components/CavitationTechnology';
// Auth Components
import Login from './auth/Login';
import Signup from './auth/Signup';
import SolutionsAuth from './auth/SolutionsAuth';
import ProtectedRoute from './components/ProtectedRoute';

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
            <div className="min-h-screen bg-white overflow-x-hidden">
              <Navbar />
              <Hero />
              <About />
              <Solutions />
              <Technology />
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

        {/* Solution Detail Pages (Protected) */}
        <Route
          path="/solutions/handpump-water-disinfection"
          element={
            <ProtectedRoute>
              <HandpumpWaterDisinfection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/solutions/lake-and-pond-rejuvenation"
          element={
            <ProtectedRoute>
              <LakeAndPondRejuvenation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/solutions/industrial-effluent-pre-treatment"
          element={
            <ProtectedRoute>
              <IndustrialEffluentPreTreatment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/solutions/cooling-tower-treatment"
          element={
            <ProtectedRoute>
              <CoolingTowerTreatment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/solutions/sewage-water-treatment"
          element={
            <ProtectedRoute>
              <SewageWaterTreatment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/solutions/swimming-pool-water-treatment"
          element={
            <ProtectedRoute>
              <SwimmingPoolWaterTreatment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/technology/hydrodynamic-cavitation"
          element={
            <ProtectedRoute>
              <CavitationTechnology />
            </ProtectedRoute>
          }
        />

        <Route path="/technology" element={<Technology />} />

        <Route path="/inquiry" element={<div className="p-10 text-center text-xl">Inquiry Page Coming Soon!</div>} />

        <Route path="/technology/hydrodynamic-cavitation" element={<CavitationTechnology />} />
      </Routes>
    </Router>
  );
}

export default App;
