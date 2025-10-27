// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDUeYRUGYuZKB4AlHrJFCeKipu5CiTBdY",
  authDomain: "emern-state.firebaseapp.com",
  projectId: "emern-state",
  storageBucket: "emern-state.firebasestorage.app",
  messagingSenderId: "663959037525",
  appId: "1:663959037525:web:b5fbfdb97f28e8e19716dc"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);