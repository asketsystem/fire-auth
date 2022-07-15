import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "fire-auth-715a7.firebaseapp.com",
  projectId: "fire-auth-715a7",
  storageBucket: "fire-auth-715a7.appspot.com",
  messagingSenderId: "1021239342134",
  appId: "1:1021239342134:web:bb8a5f481745af87869497"
};
const app = initializeApp(firebaseConfig);