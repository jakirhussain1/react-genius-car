// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaKdeK7CCnLnPhMrWJ9ZrpdO206kH76Dc",
  authDomain: "geniuse-car.firebaseapp.com",
  projectId: "geniuse-car",
  storageBucket: "geniuse-car.appspot.com",
  messagingSenderId: "392214936388",
  appId: "1:392214936388:web:8121a7789617c502f33511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;