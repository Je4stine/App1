import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import { getAuth, onAuthStateChanged } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDao-1xQySPUuyXvL0E3oQKwV8r9-YR5ws",
  authDomain: "tawi-a5b36.firebaseapp.com",
  projectId: "tawi-a5b36",
  storageBucket: "tawi-a5b36.appspot.com",
  messagingSenderId: "323143936449",
  appId: "1:323143936449:web:e6b01ca3f70b578e7ba740",
  measurementId: "G-WDJQLLETDB"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
// onAuthStateChanged(auth, user => {
//   // Check for user status
// });

export { db, auth, firebase };

