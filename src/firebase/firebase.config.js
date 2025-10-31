import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8qmKTRzT8_0DmzK3-doFUuZNiHkCMQsU",
  authDomain: "smart-deals-b3ad6.firebaseapp.com",
  projectId: "smart-deals-b3ad6",
  storageBucket: "smart-deals-b3ad6.firebasestorage.app",
  messagingSenderId: "623659291929",
  appId: "1:623659291929:web:eaf261632230029c216188",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
