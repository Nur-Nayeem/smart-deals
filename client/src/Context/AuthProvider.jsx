import React, { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import useAxios from "../hooks/useAxios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  // const axiosInstanse = useAxiosSecure();
  // const axiosInstance = useAxios();

  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (name, photourl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };

  const SignInUSer = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUSer = () => {
    // localStorage.removeItem("token"); when we use local storage to store jwt token
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // if (currentUser) { ////for jwt token storing http only cookie
      //   const loggedUser = { email: currentUser.email };
      //   axiosInstanse.post("/getToken", loggedUser).then((data) => {
      //     console.log("after logged in, the token is:", data.data);
      //   });
      // }
      // if (currentUser) {
      //   //for jwt token store local storage
      //   const loggedUser = { email: currentUser.email };
      //   axiosInstance.post("/getToken", loggedUser).then((data) => {
      //     localStorage.setItem("token", data.data.token);
      //     console.log("after logged in, the token is:", data.data.token);
      //   });
      // }
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const userInfo = {
    signUpUser,
    updateUserInfo,
    SignInUSer,
    signInWithGoogle,
    signOutUSer,
    user,
    loading,
    setLoading,
    authError,
    setAuthError,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
