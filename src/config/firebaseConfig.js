import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFYeFCaNI4wLaUFJnNkikzRQARTB4x7oE",
    authDomain: "create-project-app-48338.firebaseapp.com",
    databaseURL: "https://create-project-app-48338.firebaseio.com",
    projectId: "create-project-app-48338",
    storageBucket: "create-project-app-48338.appspot.com",
    messagingSenderId: "887801081755",
    appId: "1:887801081755:web:facb455ce811540ffc3b3e",
    measurementId: "G-JNY2P9SSMB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
 firebase.firestore();//.settings({ timestampsInSnapshots: true })


export default firebase;