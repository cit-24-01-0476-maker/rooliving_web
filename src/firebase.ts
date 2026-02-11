import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_27oRBIvMCnuQb1usHsnylSjKJ4hdxI4",
  authDomain: "rooliving-92324.firebaseapp.com",
  projectId: "rooliving-92324",
  storageBucket: "rooliving-92324.firebasestorage.app",
  messagingSenderId: "65189371234",
  appId: "1:65189371234:web:2a74a897aca61971afa03b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
