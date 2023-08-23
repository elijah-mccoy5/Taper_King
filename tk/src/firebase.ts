// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Vl1i8xYeSYkI023GmcG8i1Ql0banbyM",
  authDomain: "taperking-7cfda.firebaseapp.com",
  projectId: "taperking-7cfda",
  storageBucket: "taperking-7cfda.appspot.com",
  messagingSenderId: "757396871276",
  appId: "1:757396871276:web:266c8072e3d22f93696049",
  measurementId: "G-RHTN3ZM5SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)