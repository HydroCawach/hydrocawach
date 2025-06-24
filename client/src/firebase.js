// src/firebase.js

// Firebase core imports
import { initializeApp } from "firebase/app";

// Optional: Firebase analytics (only works in browser environment)
import { getAnalytics, isSupported } from "firebase/analytics";

// Firestore (Database)
import { getFirestore } from "firebase/firestore";

// Optional: Firebase Auth (if you plan to use secure authentication later)
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTg3bwVxdTOAsp-1GZyEGH5fHP4pnfcB8",
  authDomain: "hydrocawach-cbed1.firebaseapp.com",
  projectId: "hydrocawach-cbed1",
  storageBucket: "hydrocawach-cbed1.appspot.com",
  messagingSenderId: "3693110012",
  appId: "1:3693110012:web:50758cf1f386d707302d79",
  measurementId: "G-LHECVHHY8S"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore DB
export const db = getFirestore(app);

// Optional: Initialize Auth
export const auth = getAuth(app);

// Optional: Initialize Analytics (only if supported)
export let analytics = null;
isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
  }
});
