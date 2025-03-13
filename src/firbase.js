// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe6_HnW_e6OCJOrkJ_FqSk5Nr5TMHweQE",
  authDomain: "to-do-forum-park.firebaseapp.com",
  projectId: "to-do-forum-park",
  storageBucket: "to-do-forum-park.firebasestorage.app",
  messagingSenderId: "607512954789",
  appId: "1:607512954789:web:1b25d24ca0161b5874ca4c",
  measurementId: "G-PG4FE1PE65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);