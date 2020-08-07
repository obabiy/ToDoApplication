import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_Y1iHbQRFnIoDQ20r1KjQoQHS3xEMFzs",
  authDomain: "todo-react-app-3215c.firebaseapp.com",
  databaseURL: "https://todo-react-app-3215c.firebaseio.com",
  projectId: "todo-react-app-3215c",
  storageBucket: "todo-react-app-3215c.appspot.com",
  messagingSenderId: "503513804265",
  appId: "1:503513804265:web:45a17fa5e8628da0a16f78",
  measurementId: "G-HWQ53BRN98",
});

const db = firebaseApp.firestore();

export default db
