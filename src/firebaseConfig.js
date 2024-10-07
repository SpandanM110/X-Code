// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAc3n6o5q3eQGYJKZ6zc5OoWaP-bTPR0X0",
  authDomain: "codechain-ab32c.firebaseapp.com",
  projectId: "codechain-ab32c",
  storageBucket: "codechain-ab32c.appspot.com",
  messagingSenderId: "47885302818",
  appId: "1:47885302818:web:00d6fd11a6769e4d9e5e7b"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };