import React from 'react';
import { useNavigate } from 'react-router-dom';

const SolutionsAuth = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <img
          src="/Hydrocawach_logo.png"
          alt="Hydrocawach Logo"
          className="mx-auto mb-6 h-32 object-contain"
          style={{ maxHeight: '128px' }}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded mb-4 hover:bg-blue-700 transition"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          onClick={() => navigate('/signup')}
        >
          Signup
        </button>
      </div>

    </div>
  );
};

export default SolutionsAuth;