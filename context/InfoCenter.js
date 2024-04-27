// InfoCenter.js
import React, { createContext, useContext, useState } from "react";
import { auth } from "../Config/FireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //const auth = FIREBASE_AUTH;

  const signIn = (email, password) => {
    console.log("signing in");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log(user);
      });
  };

  const signUp = (email, password) => {
    console.log("signing up");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signOut = () => {
    console.log("logging out");
    auth
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <InfoContext.Provider value={{ user, signIn, signOut, signUp }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);
