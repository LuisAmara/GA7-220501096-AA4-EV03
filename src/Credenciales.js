// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChRpAaytLfMB7EvEcD9jYoBgGHwfrR62k",
  authDomain: "login-7daab.firebaseapp.com",
  projectId: "login-7daab",
  storageBucket: "login-7daab.firebasestorage.app",
  messagingSenderId: "501414862320",
  appId: "1:501414862320:web:479e31315d07147c189135"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;