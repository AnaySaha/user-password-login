// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2loB4tjuHuxwVQrhtDCbWR5iQhwp4WCU",
  authDomain: "user-password-login.firebaseapp.com",
  projectId: "user-password-login",
  storageBucket: "user-password-login.firebasestorage.app",
  messagingSenderId: "857645501000",
  appId: "1:857645501000:web:2ef0ccf469d51da5aaa67d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;