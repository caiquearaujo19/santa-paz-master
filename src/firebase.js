import firebase from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCgzHZV9duuH1O6mVbMwE2mHFCWTjHIkeI",
    authDomain: "cruzeiro-do-cipo-e5177.firebaseapp.com",
    databaseURL: "https://cruzeiro-do-cipo-e5177-default-rtdb.firebaseio.com",
    projectId: "cruzeiro-do-cipo-e5177",
    storageBucket: "cruzeiro-do-cipo-e5177.appspot.com",
    messagingSenderId: "592463594834",
    appId: "1:592463594834:web:bcd64228d370e930cb668b"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();