
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCsgjngr_XLdmPpwCpABp4Uei7s4XQsiZE",
  authDomain: "reactmesquida.firebaseapp.com",
  projectId: "reactmesquida",
  storageBucket: "reactmesquida.firebasestorage.app",
  messagingSenderId: "479090547162",
  appId: "1:479090547162:web:7a526df10ee6bc72efc8e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)