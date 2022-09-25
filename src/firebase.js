import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBx39aOStJpn4wfZ-5w1dvWl8EkbJi7NEc",
  authDomain: "to-do-app-1033d.firebaseapp.com",
  projectId: "to-do-app-1033d",
  storageBucket: "to-do-app-1033d.appspot.com",
  messagingSenderId: "694441783092",
  appId: "1:694441783092:web:dd03deb7c45393b3ecbf61",
  measurementId: "G-MRV94FF3SL"
});

const db = firebaseApp.firestore();

export default db;
