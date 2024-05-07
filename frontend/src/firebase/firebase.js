// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGHrtSnObtecMjHbdeuP2UbgjdEWpFmOw",
  authDomain: "uploadingfile-b628d.firebaseapp.com",
  projectId: "uploadingfile-b628d",
  storageBucket: "uploadingfile-b628d.appspot.com",
  messagingSenderId: "1000308628903",
  appId: "1:1000308628903:web:0924254b541ec948d72a82",
  measurementId: "G-XTV9RL101X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
// const analytics = getAnalytics(app);