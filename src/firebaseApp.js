import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlQaU5GCqaH0M4W5CAMZiAmehTfFMp0tM",
    authDomain: "vagmi-e-commerce.firebaseapp.com",
    projectId: "vagmi-e-commerce",
    storageBucket: "vagmi-e-commerce.appspot.com",
    messagingSenderId: "623739478407",
    appId: "1:623739478407:web:40e2655aedf1929150f322",
    measurementId: "G-Q05B8ZMK6R"
  };

async function init() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
}
init();

const db = firebase.firestore();

const auth = firebase.auth();

const GSignInProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, GSignInProvider };