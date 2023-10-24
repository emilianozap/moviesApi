import firebase from "firebase";




const firebaseConfig = {
  apiKey: "AIzaSyD2x4BCsrneGRrLtewYLic-wD1T0rRBwJI",
  authDomain: "netflix-af291.firebaseapp.com",
  projectId: "netflix-af291",
  storageBucket: "netflix-af291.appspot.com",
  messagingSenderId: "406663550133",
  appId: "1:406663550133:web:63883ca936dc31e5ed5afc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)


const auth = firebase.auth()

export {auth}