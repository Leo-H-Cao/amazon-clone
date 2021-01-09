import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFHy4kzDpebFG9NTeZLSoeWzHVWzKauSw",
  authDomain: "clone-dc000.firebaseapp.com",
  projectId: "clone-dc000",
  storageBucket: "clone-dc000.appspot.com",
  messagingSenderId: "783373412311",
  appId: "1:783373412311:web:1c03e92f9229fed4a14d92",
  measurementId: "G-CXDQ572D95",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
