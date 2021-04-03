import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACiVGvgZ1TnIXOFI8YbOo1cjT8BKepoFI",
  authDomain: "whatsapp-clone-7ce54.firebaseapp.com",
  projectId: "whatsapp-clone-7ce54",
  storageBucket: "whatsapp-clone-7ce54.appspot.com",
  messagingSenderId: "203177560798",
  appId: "1:203177560798:web:409fca4e29a77276d1d04f",
  measurementId: "G-MWJWWNNV1V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore(); 
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, provider}; 
export default db; 
