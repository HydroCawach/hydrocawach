import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const normalizedEmail = form.email.trim().toLowerCase();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        normalizedEmail,
        form.password
      );

      const user = userCredential.user;  // get UID

      // Save additional info in Firestore (UID as doc ID)
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        name: form.name,
        phone: form.phone,
        email: normalizedEmail,
        createdAt: new Date()
      });

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', normalizedEmail);
      localStorage.setItem('userName', form.name);

      alert("Signup successful! Redirecting to home...");
      navigate('/');
    } catch (error) {
      console.error("Signup Error:", error.message);
      if (error.code === 'auth/email-already-in-use') {
        alert("This email is already registered. Please log in.");
        navigate('/login');
      } else {
        alert("Error during signup. Try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <input
          className="w-full mb-4 p-2 border rounded"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 p-2 border rounded"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 p-2 border rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-6 p-2 border rounded"
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
