// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJXRud2nwCcoy6Almh5CmLUZrjcmyf4iU",
  authDomain: "netflixgpt-99232.firebaseapp.com",
  projectId: "netflixgpt-99232",
  storageBucket: "netflixgpt-99232.appspot.com",
  messagingSenderId: "832211999782",
  appId: "1:832211999782:web:a0c50102e577669cd2dae7",
  measurementId: "G-WCQVE470KG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
