// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqwS4af8gD-qzA7gnObZe3Vn96nuEk2uw",
    authDomain: "clothorythm.firebaseapp.com",
    projectId: "clothorythm",
    storageBucket: "clothorythm.firebasestorage.app",
    messagingSenderId: "36140863583",
    appId: "1:36140863583:web:ac41410c1bf4f1cf1e4bea",
    measurementId: "G-0HK4V5KEDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();