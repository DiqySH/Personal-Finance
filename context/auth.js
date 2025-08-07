"use client";
import { Authentication, SignIn } from "@/services/firebase";
import { useEffect, useState } from "react";
import { InitialUserState, useUser } from "@/context/user";

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();
  const { SetUser } = user;
  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        SetUser({ email: user.email, uid: user.uid });
        console.log(user);
      } else {
        SetUser(InitialUserState);
        console.log(user);
      }
      setIsLoading(false);
    });
  };
  useEffect(() => {
    InitiateAuthStateChange();
  }, []);
  if (isLoading) {
    return <main></main>;
  }
  return children;
};

export default AuthStateChangeProvider;
