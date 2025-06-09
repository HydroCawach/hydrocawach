import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume signup successful
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <input
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-6 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;