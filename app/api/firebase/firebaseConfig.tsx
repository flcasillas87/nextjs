import firebase from 'firebase/app'
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBUHttGYbkgyNky2RhSjlhrIoe2Srf0PVA",
    authDomain: "sren-26321.firebaseapp.com",  
    databaseURL: "https://sren-26321-default-rtdb.firebaseio.com",
    projectId: "sren-26321",  
    storageBucket: "sren-26321.appspot.com",
    messagingSenderId: "934110277189",
    appId: "1:934110277189:web:12ba6b99a608953885bd2c",
    measurementId: "G-H6ESY9PTS6"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;