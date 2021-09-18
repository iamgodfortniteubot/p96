const firebaseConfig = {
    apiKey: "AIzaSyAAl6f7aVClET-v87p5XHHqF7cTQ3V2xMM",
    authDomain: "kwitter-aarav.firebaseapp.com",
    databaseURL: "https://kwitter-aarav-default-rtdb.firebaseio.com",
    projectId: "kwitter-aarav",
    storageBucket: "kwitter-aarav.appspot.com",
    messagingSenderId: "285683994488",
    appId: "1:285683994488:web:118f755d68450a5e9d828d",
    measurementId: "G-1X4W0ETHKR"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  
      document.getElementById("room_name").value= "";
  
  }
  
  function getData() { 
     firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  