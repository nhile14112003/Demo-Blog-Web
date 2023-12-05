// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-73576.firebaseapp.com",
  projectId: "blog-73576",
  storageBucket: "blog-73576.appspot.com",
  messagingSenderId: "137188136825",
  appId: "1:137188136825:web:f17f7c5ab119f7980a01a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);