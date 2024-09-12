const firebase = require('firebase/compat/app');
require('firebase/compat/firestore');
require("firebase/compat/storage");

const firebaseConfig = {
    apiKey: "AIzaSyCd3uwUGAGwv1SXAdFAvB9eGCrQDECNQv4",
    authDomain: "homyfyd-ba82d.firebaseapp.com",
    projectId: "homyfyd-ba82d",
    storageBucket: "homyfyd-ba82d.appspot.com",
    messagingSenderId: "893096877697",
    appId: "1:893096877697:web:0f62c38a3444d5b224f780",
    measurementId: "G-RJMVHN9JPL"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export { db,storage };



