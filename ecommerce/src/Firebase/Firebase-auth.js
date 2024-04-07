// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCTxmD7Bces6QWVaIEsw9Jh_R8VE0ZCYPo",
  authDomain: "e-commerce-f5646.firebaseapp.com",
  projectId: "e-commerce-f5646",
  storageBucket: "e-commerce-f5646.appspot.com",
  messagingSenderId: "363696217469",
  appId: "1:363696217469:web:810c47ef5055c4a91c4014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();
export {app,auth};