 import firebase from 'firebase/app';
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "project-manager-app-a4212.firebaseapp.com",
    databaseURL: "https://project-manager-app-a4212.firebaseio.com",
    projectId: "project-manager-app-a4212",
    storageBucket: "project-manager-app-a4212.appspot.com",
    messagingSenderId: "1088786719007",
    appId: "1:1088786719007:web:fcd34e06a19be79144502a",
    measurementId: "G-E1NQXTHRLL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//   firebase.firestore().settings({ timestampsInSnapshots: true });
  firebase.firestore();


  export default firebase;