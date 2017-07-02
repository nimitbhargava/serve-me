var firebase = require("firebase");

var config = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "serve-liquor.firebaseapp.com",
  databaseURL: "https://serve-liquor.firebaseio.com",
  storageBucket: "serve-liquor.appspot.com",
};
firebase.initializeApp(config);

//Reading Firebase Database
var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});