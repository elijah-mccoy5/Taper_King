// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmJ6mvWN-EO64Aocyt4PwlEMLpN-GBxnw",
  authDomain: "taperking-40563.firebaseapp.com",
  projectId: "taperking-40563",
  storageBucket: "taperking-40563.appspot.com",
  messagingSenderId: "814382029692",
  appId: "1:814382029692:web:f4fb2961895a3790d2a2f9",
  measurementId: "G-KE520NQ3NJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app)
