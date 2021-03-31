
var firebaseConfig = {
      apiKey: "AIzaSyAnbdeZReZXSzBVvzYEAP0u9gEaxreyJrU",
      authDomain: "kwitter-e1680.firebaseapp.com",
      databaseURL: "https://kwitter-e1680-default-rtdb.firebaseio.com",
      projectId: "kwitter-e1680",
      storageBucket: "kwitter-e1680.appspot.com",
      messagingSenderId: "34492195600",
      appId: "1:34492195600:web:35c92dc0ae618720ed7b95"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+RoomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
RoomName = localStorage.getItem("RoomName");
User_Name = localStorage.getItem("UserName");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(RoomName).push({
            name:User_Name,
            message:msg,
            like:0
      });
      document.getElementById("msg").innerHTML="";
}
//End code
      } });  }); }
getData();
