import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { db } from '../firebase';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';

const CompleteSignIn = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [emailInput, setEmailInput] = useState('');
  const [email, setEmail] = useState(localStorage.getItem('emailForSignIn') || '');
  const [message, setMessage] = useState('Completing login...');

  useEffect(() => {
    const url = window.location.href;

    if (!isSignInWithEmailLink(auth, url)) {
      setMessage('Invalid or expired sign-in link.');
      return;
    }

    // If no email stored, wait for user to input it
    if (!email) {
      setMessage('Enter your email to complete sign-in.');
      return;
    }

    // Proceed with sign-in
    signInWithEmailLink(auth, email, url)
      .then(async (result) => {
        localStorage.removeItem('emailForSignIn');
        const user = result.user;

        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', user.email);
          localStorage.setItem('userName', userData.name);
          navigate('/');
        } else {
          // Try pendingUsers collection using email
          const pendingRef = doc(db, 'pendingUsers', user.email);
          const pendingSnap = await getDoc(pendingRef);

          if (pendingSnap.exists()) {
            const pendingData = pendingSnap.data();

            await setDoc(userRef, {
              ...pendingData,
              migratedAt: new Date()
            });

            await deleteDoc(pendingRef);

            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userName', pendingData.name);
            navigate('/');
          } else {
            setMessage('Login successful, but user profile not found.');
          }
        }
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
        setMessage('Failed to sign in. Try again.');
      });
  }, [auth, email, navigate]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-gray-100 text-center">
      <h2 className="text-xl font-semibold mb-4">Hydrocawach - Login Status</h2>
      <p className="mb-6">{message}</p>

      {message.includes('Enter your email') && (
        <div className="w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <button
            onClick={() => {
              setEmail(emailInput);
              setMessage('Signing you in...');
            }}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit Email & Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default CompleteSignIn;
