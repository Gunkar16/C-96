// Your web app's Firebase configuration
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

    User_Name = localStorage.getItem("UserName");

    document.getElementById("userId_show").innerHTML="Weclome, "+User_Name+" !";

    function addRoom(){
          RoomName = document.getElementById("roomName").value;
          firebase.database().ref("/").child(RoomName).update(
                {
                      purpose:"addingRoomName"
                }
          );
         localStorage.setItem("RoomName",RoomName);
         //window.location="kwitter_page.html" ;
    }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+Room_names)
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("RoomName",name);
      window.location="kwitter_page.html";
}
function logOut(){
      localStorage.removeItem("UserName");
      localStorage.removeItem("RoomName");
      window.location="index.html";
}
