import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSJuq4NxNZZ_Aooi9EbaVH0XbvwhK03Lg",
  authDomain: "final-react-b7fa6.firebaseapp.com",
  projectId: "final-react-b7fa6",
  storageBucket: "final-react-b7fa6.firebasestorage.app",
  messagingSenderId: "311596854852",
  appId: "1:311596854852:web:1ac09ce358b0bd1cfe1611"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);