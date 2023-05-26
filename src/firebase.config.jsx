// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDm81e9KyfULQXZ3XKX73oKQJweHhYrYM",
  authDomain: "libreriaeden-27216.firebaseapp.com",
  projectId: "libreriaeden-27216",
  storageBucket: "libreriaeden-27216.appspot.com",
  messagingSenderId: "661136330161",
  appId: "1:661136330161:web:271a366686922edd6c8190",
  measurementId: "G-8PYEFHVTT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);