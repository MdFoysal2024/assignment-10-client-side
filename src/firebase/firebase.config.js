// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzoc5Oe5caQ5n1ymraSBAg086Eio3wu8k",
  authDomain: "crowd-funding-applicatio-b1f95.firebaseapp.com",
  projectId: "crowd-funding-applicatio-b1f95",
  storageBucket: "crowd-funding-applicatio-b1f95.firebasestorage.app",
  messagingSenderId: "805485619413",
  appId: "1:805485619413:web:711611e4cc71b6c8cb9a5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);