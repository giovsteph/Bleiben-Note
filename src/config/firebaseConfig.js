import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyD0AdYzYFlrkIuwq7PEgrdElXFlbEqfQQo",
  authDomain: "bleiben-note.firebaseapp.com",
  databaseURL: "https://bleiben-note.firebaseio.com",
  projectId: "bleiben-note",
  storageBucket: "bleiben-note.appspot.com",
  messagingSenderId: "32260477505",
  appId: "1:32260477505:web:389b49a3ce995a2142ecc0",
};
// Initialize Firebase
firebase.initializeApp(config);
//firestore
firebase.firestore();

export default firebase;
