// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_ECRqDK1CifPY2D9oURlO4rh89SP7lpM",
  authDomain: "podtcast-platform.firebaseapp.com",
  projectId: "podtcast-platform",
  storageBucket: "podtcast-platform.appspot.com",
  messagingSenderId: "417272810662",
  appId: "1:417272810662:web:e4dd354035f930a6883867",
  measurementId: "G-FTJD79G2VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
