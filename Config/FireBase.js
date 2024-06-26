import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";


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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage, collection, addDoc };


