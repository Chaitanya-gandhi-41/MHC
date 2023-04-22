// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGKkFdgGf1wPxQvVCgvUQFINfv0r8VLWY",
  authDomain: "mental-health-project-90c9e.firebaseapp.com",
  projectId: "mental-health-project-90c9e",
  storageBucket: "mental-health-project-90c9e.appspot.com",
  messagingSenderId: "630934690093",
  appId: "1:630934690093:web:291ad57ec22cc0bcb61ba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export {auth};