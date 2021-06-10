
//Firebase URLs
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCNcQno2oxrMeHdLpNaljasJTmQ4j6ucuc",
      authDomain: "kwitter-25335.firebaseapp.com",
      databaseURL: "https://kwitter-25335-default-rtdb.firebaseio.com",
      projectId: "kwitter-25335",
      storageBucket: "kwitter-25335.appspot.com",
      messagingSenderId: "1017810430241",
      appId: "1:1017810430241:web:c5e96ef51de79eda03b660"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+ " !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: "+Room_names);
      row = "<div class='room_name' id=" +Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding_the_room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}