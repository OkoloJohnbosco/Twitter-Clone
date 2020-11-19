import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgRxcEMayrbm5GOsj38QjzVCPsbgXad7s",
  authDomain: "twitter-clone-ffaeb.firebaseapp.com",
  databaseURL: "https://twitter-clone-ffaeb.firebaseio.com",
  projectId: "twitter-clone-ffaeb",
  storageBucket: "twitter-clone-ffaeb.appspot.com",
  messagingSenderId: "407358121415",
  appId: "1:407358121415:web:a5d01152919618b612a5e2",
  measurementId: "G-H358LC7387",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export { db, timeStamp };
