import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8QJn7RXst5MBM7C_13VNUa9UInqocXnY",
  authDomain: "personal-finance-4fc8d.firebaseapp.com",
  projectId: "personal-finance-4fc8d",
  storageBucket: "personal-finance-4fc8d.firebasestorage.app",
  messagingSenderId: "668423926274",
  appId: "1:668423926274:web:a3061e406b3e8dbc166d1b",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const FirebaseAuth = getAuth();

export const Authentication = () => {
  return FirebaseAuth;
};

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth, email, password);
};

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password);
};

export const SignOut = async () => {
  await signOut(FirebaseAuth);
};

export const UpdatePassword = async (newPassword) => {
  await updatePassword(FirebaseAuth, newPassword);
};
