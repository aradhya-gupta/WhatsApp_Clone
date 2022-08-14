import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAD-vuIjcUY0gqAe0OhQ4EWxQlNhEcY3nM",
  authDomain: "chatappnew-cc31a.firebaseapp.com",
  projectId: "chatappnew-cc31a",
  storageBucket: "chatappnew-cc31a.appspot.com",
  messagingSenderId: "875192270479",
  appId: "1:875192270479:web:fb0fe4ea11c12f1e7f3afa",
  measurementId: "G-LCGPYP24PG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore(); 
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, provider}; 
export default db; 
