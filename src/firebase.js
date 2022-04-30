import firebase from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDydiRXF9rrk22ZFFsHFDKaBh9H1hRXO0s",
    authDomain: "santa-paz-master.firebaseapp.com",
    projectId: "santa-paz-master",
    storageBucket: "santa-paz-master.appspot.com",
    messagingSenderId: "479804739463",
    appId: "1:479804739463:web:9d7c6f398b66ccc17dcd22"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();