// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCAfO75w4U2Jn5peg7WAzf9tHlIm1_ZM0",
    authDomain: "ion-t-salvador2.firebaseapp.com",
    projectId: "ion-t-salvador2",
    storageBucket: "ion-t-salvador2.appspot.com",
    messagingSenderId: "166932295599",
    appId: "1:166932295599:web:a7983c26f801d4b505095a",
    measurementId: "G-CC3SYMZVN8"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}