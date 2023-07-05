// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC99Rxy0wIxKFzjyQImFWTbJ4I0Fqg9SeQ",
  authDomain: "chat-app-0786.firebaseapp.com",
  projectId: "chat-app-0786",
  storageBucket: "chat-app-0786.appspot.com",
  messagingSenderId: "823336999947",
  appId: "1:823336999947:web:76aac927f013ed6b09fb0e",
  measurementId: "G-ZTNVE6D43B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
