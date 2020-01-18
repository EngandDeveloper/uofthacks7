//Pre-written code by firebase
//################################################
var firebaseConfig = {
    apiKey: "AIzaSyD49vcZv3vN6EfKbbIGMBmW0iQIMbuGsZk",
    authDomain: "uhack7.firebaseapp.com",
    databaseURL: "https://uhack7.firebaseio.com",
    projectId: "uhack7",
    storageBucket: "uhack7.appspot.com",
    messagingSenderId: "532338834871",
    appId: "1:532338834871:web:81e16defcce9ca1ed37c32"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//###################################################

var database = firebase.firestore();
var ref = database.collection("score");

var data = {
    name: "testPerson1",
    score: 50
}

ref.add(data);