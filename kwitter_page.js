//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like : 0 
  })   ;
  document.getElementById("msg").value="";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}