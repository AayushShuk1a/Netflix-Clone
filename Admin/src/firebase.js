import firebase from "firebase/index";

const firebaseConfig = {
  apiKey: "AIzaSyCGoDao-5as7EMbSuw0wA5U17I-xwo083M",
  authDomain: "netflix-clone-201bf.firebaseapp.com",
  projectId: "netflix-clone-201bf",
  storageBucket: "netflix-clone-201bf.appspot.com",
  messagingSenderId: "17383011965",
  appId: "1:17383011965:web:242dd2d8998f8a00872314",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
