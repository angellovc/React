import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCN10kBbtsDTONc5b1KricTtVNB2ee3y-E",
    authDomain: "react-journalapp-b88df.firebaseapp.com",
    databaseURL: "https://react-journalapp-b88df.firebaseio.com",
    projectId: "react-journalapp-b88df",
    storageBucket: "react-journalapp-b88df.appspot.com",
    messagingSenderId: "628373844566",
    appId: "1:628373844566:web:2ace067207862df42001f7"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
