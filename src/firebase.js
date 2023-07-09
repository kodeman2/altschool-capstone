import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
 apiKey: "AIzaSyArfFfubf-biDqbtgKS4MKj3MwfPqpjY30",
 authDomain: "url-shorty-d67b6.firebaseapp.com",
 projectId: "url-shorty-d67b6",
 storageBucket: "url-shorty-d67b6.appspot.com",
 messagingSenderId: "487786147469",
 appId: "1:487786147469:web:9bdcccb7b0cea1e6917cc4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
export default db;


