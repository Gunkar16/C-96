function addUser(){
    userName = document.getElementById("userName").value;
    localStorage.setItem("UserName",userName);
    window.location="kwitter_room.html";
}