// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJq9Edv13zNlX-vxjv7qysBEX65ZYIN8U",
  authDomain: "idee-48361.firebaseapp.com",
  projectId: "idee-48361",
  storageBucket: "idee-48361.firebasestorage.app",
  messagingSenderId: "26203032313",
  appId: "1:26203032313:web:a2278a63d20d696f7c7028",
  measurementId: "G-ES4CW3KQ1K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// This is to get to know through firebase:
/*
1. What users click mostly in my application
2. How many people logged in through Google
3. Which browser they have used to login
*/
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
