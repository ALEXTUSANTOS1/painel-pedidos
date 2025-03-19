// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOI5T-TOyiH0gtKQzS2zPLgxVQQ8CRPvo",
  authDomain: "pedidos-e685d.firebaseapp.com",
  projectId: "pedidos-e685d",
  storageBucket: "pedidos-e685d.firebasestorage.app",
  messagingSenderId: "91428266531",
  appId: "1:91428266531:web:6fe92f16b3524ed6514796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage}