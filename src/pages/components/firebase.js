// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6XVYAfMnBJgwrPsmN238tfTfwa5P2cho",
  authDomain: "gnsfirebase.firebaseapp.com",
  projectId: "gnsfirebase",
  storageBucket: "gnsfirebase.appspot.com",
  messagingSenderId: "867112623192",
  appId: "1:867112623192:web:df5f9701080d8a0e213e2d",
  measurementId: "G-9Z8FMS7ZD4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
