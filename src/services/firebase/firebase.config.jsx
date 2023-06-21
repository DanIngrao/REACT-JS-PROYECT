import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDm81e9KyfULQXZ3XKX73oKQJweHhYrYM",
  authDomain: "libreriaeden-27216.firebaseapp.com",
  projectId: "libreriaeden-27216",
  storageBucket: "libreriaeden-27216.appspot.com",
  messagingSenderId: "661136330161",
  appId: "1:661136330161:web:271a366686922edd6c8190",
  measurementId: "G-8PYEFHVTT4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)