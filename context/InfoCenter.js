// InfoCenter.js
import React, { createContext, useContext, useState } from 'react';


const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    console.log("signing in")
    setUser({
      name:"Emmanuel Nyatepe",
      role:"client"
    })
    {/*const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });*/}
  };

  const signUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signOut = () => {
    console.log('logging out')
    setUser(null)
    {/*const auth = getAuth();
    auth.signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });*/}
  };

  return (
    <InfoContext.Provider value={{ user, signIn, signOut ,signUp}}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);
