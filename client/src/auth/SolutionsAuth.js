import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SolutionsAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm border border-gray-200">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/Hydrocawach_logo.png"
            alt="Hydrocawach Logo"
            className="h-28 object-contain mb-4"
          />
          <h2 className="text-2xl font-semibold text-blue-600 tracking-wide">Welcome, Visitor</h2>
          <p className="text-sm text-blue-600 mt-1">Please login or sign up to continue</p>
        </div>

        <button
          className="w-full bg-blue-600 text-white text-base py-3 rounded-lg mb-4 hover:bg-blue-700 transition duration-300 font-medium"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="w-full bg-green-500 text-white text-base py-3 rounded-lg hover:bg-green-600 transition duration-300 font-medium"
          onClick={() => navigate('/signup')}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default SolutionsAuth;
