const firebaseConfig = {
      apiKey: "AIzaSyARcdTT-8RTwHf2TqzAn9phfZIW3Sn6ySA",
      authDomain: "kwitter-2f323.firebaseapp.com",
      databaseURL: "https://kwitter-2f323-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f323",
      storageBucket: "kwitter-2f323.appspot.com",
      messagingSenderId: "79533937127",
      appId: "1:79533937127:web:413c98b7474375dc516d42"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
//End code
      } });  }); }
getData();


function send() 
{ 
      msg = document.getElementById("msg"). value ; 
firebase. database (). ref (room_name).push({ 
      name :user_name, 
      message:msg, 
      like : 0 
      }); 
document.getElementById("msg"). value = ""; 
}