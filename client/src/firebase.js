// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "esate-a242d.firebaseapp.com",
  projectId: "esate-a242d",
  storageBucket: "esate-a242d.appspot.com",
  messagingSenderId: "126970792986",
  appId: "1:126970792986:web:c33330cef52edad1b315a3",
  measurementId: "G-FR84LTZ51W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
