import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ2DmzoyTNqXclSUteZg44U51zrS5b-t8",
  authDomain: "gridco-52cfd.firebaseapp.com",
  projectId: "gridco-52cfd",
  storageBucket: "gridco-52cfd.appspot.com",
  messagingSenderId: "366314364100",
  appId: "1:366314364100:web:a26dc607ba013ddb5abd91",
  measurementId: "G-07D1RH1WQ8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app)