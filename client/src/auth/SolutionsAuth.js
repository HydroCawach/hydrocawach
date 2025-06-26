// src/auth/SolutionsAuth.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SolutionsAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      // Prevent loop if redirecting from a solution page
      navigate('/', { replace: true });
    } else {
      setChecking(false); // Show auth options
    }
  }, [navigate]);

  if (checking) return <div className="text-center mt-20 text-lg">Checking access...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm border border-gray-200">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/Hydrocawach_logo.png"
            alt="Hydrocawach Logo"
            className="h-24 object-contain mb-4"
          />
          <h2 className="text-2xl font-semibold text-blue-600">Welcome, Visitor</h2>
          <p className="text-sm text-gray-600">Please login or sign up to continue</p>
        </div>
        <button
          className="w-full bg-blue-600 text-white text-base py-2 rounded-lg mb-3 hover:bg-blue-700"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="w-full bg-green-500 text-white text-base py-2 rounded-lg hover:bg-green-600"
          onClick={() => navigate('/signup')}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default SolutionsAuth;
