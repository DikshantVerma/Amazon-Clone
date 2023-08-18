import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxD_61GURjjRvC1KLUp_UHRkohN_3WBJo",

  authDomain: "clone-d9ea9.firebaseapp.com",

  projectId: "clone-d9ea9",

  storageBucket: "clone-d9ea9.appspot.com",

  messagingSenderId: "249962000911",

  appId: "1:249962000911:web:226b776d77e35f7d22297a",

  measurementId: "G-N9K7GBN5ME",
});

const auth = firebase.auth();

export { auth };
