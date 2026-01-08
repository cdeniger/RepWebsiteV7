
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWqDIs2SkIKwYmSTLGvqdXDaeA_6NWrsE",
  authDomain: "rep-website-v7.firebaseapp.com",
  projectId: "rep-website-v7",
  storageBucket: "rep-website-v7.firebasestorage.app",
  messagingSenderId: "73724226124",
  appId: "1:73724226124:web:ce4d5f08acfc5afa9022e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
