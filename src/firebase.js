import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC61ULPFyi2ejyJhGohJKJMNm7hVSVCuTY",
  authDomain: "reactchatapp-51183.firebaseapp.com",
  projectId: "reactchatapp-51183",
  storageBucket: "reactchatapp-51183.appspot.com",
  messagingSenderId: "204969182986",
  appId: "1:204969182986:web:29346fd6546a19d5701cf3",
  measurementId: "G-JGM1322HQP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
