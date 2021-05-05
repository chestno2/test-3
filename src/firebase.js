import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBYWU0zpxXr0WPqJH1IMvMhMkzvn5uOdQo",
    authDomain: "tinder-clone-b0dff.firebaseapp.com",
    databaseURL:"https://tinder-clone-b0df.firebasio.com",
    projectId: "tinder-clone-b0dff",
    storageBucket: "tinder-clone-b0dff.appspot.com",
    messagingSenderId: "667309907319",
    appId: "1:667309907319:web:3ca2c1de64f81ce9ea1572",
    measurementId: "G-LXM4NEP8ED"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;