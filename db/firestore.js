import * as firebase from "firebase";

import "firebase/firestore";

const configuration = {
  apiKey: "AIzaSyCZU0T05oBapAuo1-Rsplm3Ra2vAxqJS8w",
  authDomain: "quickupdates-8b6da.firebaseapp.com",
  databaseURL:
    "https://quickupdates-8b6da-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quickupdates-8b6da",
  storageBucket: "quickupdates-8b6da.appspot.com",
  messagingSenderId: "248347257732",
  appId: "1:248347257732:web:3f4f62175b304a5f43cbd1",
  measurementId: "G-TQYHDDY92Q",
};

firebase.initializeApp(configuration);

const db = firebase.firestore();

export default db;
