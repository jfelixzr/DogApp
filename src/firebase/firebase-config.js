import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBaXpImKXfIZipl6gaakNJPFiQnE7KuX7Q",
    authDomain: "proyecto-f0064.firebaseapp.com",
    projectId: "proyecto-f0064",
    storageBucket: "proyecto-f0064.appspot.com",
    messagingSenderId: "98423819394",
    appId: "1:98423819394:web:d844a74ec37b85e5b8389b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}