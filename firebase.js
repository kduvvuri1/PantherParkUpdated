import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1la6MbSHxyKxayI1P7ghQ6u6Yu1jtK8Y",
    authDomain: "pantherpark-66dcd.firebaseapp.com",
    projectId: "pantherpark-66dcd",
    storageBucket: "pantherpark-66dcd.firebasestorage.app",
    messagingSenderId: "945505883116",
    appId: "1:945505883116:web:3b88131ee3733648d6a6c9",
    measurementId: "G-J6LM4G4KZ9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
