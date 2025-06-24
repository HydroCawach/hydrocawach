// src/firebase.js

// Import core Firebase SDK
import { initializeApp } from "firebase/app";

// Firestore (Database)
import { getFirestore } from "firebase/firestore";

// Firebase Authentication
import { getAuth } from "firebase/auth";

// (Optional) Firebase Analytics
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration (company mail project hydrocawach-cbed1)
const firebaseConfig = {
  apiKey: "AIzaSyBhYbiT55X-kqZLKl_CARuvmALbII9Wak0",
  authDomain: "hydrocawach-6bf52.firebaseapp.com",
  projectId: "hydrocawach-6bf52",
  storageBucket: "hydrocawach-6bf52.firebasestorage.app",
  messagingSenderId: "411017403839",
  appId: "1:411017403839:web:c2a38dca7a93c21e2f550a"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Analytics (if supported)
export let analytics = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});
