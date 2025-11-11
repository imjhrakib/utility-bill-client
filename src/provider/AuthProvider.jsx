import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import auth from "../firebase/firebase.config.js";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setUser(user);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("currentUser from onAuthStateChanged", currentUser);
        setUser(currentUser);
        setLoading(false);
      }
      //   if (currentUser) {
      //     const loggedUser = { email: currentUser.email };
      //     fetch("http://localhost:3000/getToken", {
      //       method: "POST",
      //       headers: {
      //         "content-type": "application/json",
      //         authorization: `Bearer ${localStorage.getItem("token")}`,
      //       },
      //       body: JSON.stringify(loggedUser),
      //     })
      //       .then((res) => res.json())
      //       .then((data) => {
      //         console.log("after logging ", data.token);
      //         localStorage.setItem("token", data.token);
      //       });
      //   }
      //   setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    user,
    setUser,
    setLoading,
    loading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
