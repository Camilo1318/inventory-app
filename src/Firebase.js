import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDgm1r5PSGsSCbESckuvq8Yfr5wWOIOVNQ",
  authDomain: "fb-crud-react-d717c.firebaseapp.com",
  projectId: "fb-crud-react-d717c",
  storageBucket: "fb-crud-react-d717c.appspot.com",
  messagingSenderId: "3407964452",
  appId: "1:3407964452:web:ef66cef12ed247e9afebb1",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
