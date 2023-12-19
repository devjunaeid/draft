// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "draftstorage-91964.firebaseapp.com",
  projectId: "draftstorage-91964",
  storageBucket: "draftstorage-91964.appspot.com",
  messagingSenderId: "548375752573",
  appId: "1:548375752573:web:c92a80e7d7cd2552522614"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);