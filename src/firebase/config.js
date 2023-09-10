// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYOb1GF4mto3X_6w1XGyqj8OimoYhbBJw",
  authDomain: "writenode-cb.firebaseapp.com",
  projectId: "writenode-cb",
  storageBucket: "writenode-cb.appspot.com",
  messagingSenderId: "76201584954",
  appId: "1:76201584954:web:cb344b2b9b170fd045c803"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

