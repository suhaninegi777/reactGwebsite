// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD_ngWmKo1eJ5REZNGfEAE2Mix-tpI4YnU",
  authDomain: "note-taking-app-e5218.firebaseapp.com",
  projectId: "note-taking-app-e5218",
  storageBucket: "note-taking-app-e5218.appspot.com",
  messagingSenderId: "65485987737",
  appId: "1:65485987737:web:e5d9f5cbcfcec1aabfbd08",
  measurementId: "G-HZTN045B2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth();
export const db=getFirestore(app);