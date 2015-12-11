var person = null;
var server = window.location.href;
var socket = io.connect(server);

socket.on('connect', function() {
    var notityobj=document.getElementById("status");
    notityobj.innerHTML="";
	  notityobj.innerHTML=notityobj.innerHTML+'<p>Status: <strong> connected </strong></p>';
});

socket.on('disconnect', function() {
    var notityobj=document.getElementById("status");
    notityobj.innerHTML="";
    notityobj.innerHTML=notityobj.innerHTML+'<p>Status: <strong> disconnected </strong></p>';
});

socket.on('receive', function(content) {
  var notityobj=document.getElementById("chat");
  notityobj.innerHTML=notityobj.innerHTML+'<p><strong>'+content.username+'</strong>: '+content.message+'</p>';
  notityobj.scrollTop = notityobj.scrollHeight;
});

socket.on('userConected', function(content) {
  console.log(content);
  for (var i=0; i<content.length; i++) {
    if (content[i] != null) {
      for (var j=0; j<content.length; j++) {
        if (content[j] != null) {

        }
      }
    }
  }
});

function existUsername(myUsername, myUsers) {
  console.log(myUsername);
  console.log(myUsers);
  var count = 0;
  for (var i=0; i<myUsers.length; i++) {
    if (myUsers != null) {
      if (myUsername == myUsers[i].username) {
        count++;
      }
    }
  }

  if (count > 1) {
    return true;
  }
  else {
    return false;
  }
}

$(document).ready(function(){
  // Solicito al usuario que introduzca su nombre de usuario
  if (person == null) {
    var person = prompt("Please enter your username", "Mr. Robot");
    if (person != null) {
      var notityobj=document.getElementById("username");
      notityobj.innerHTML=notityobj.innerHTML+'<p>'+person+'</p>';
      socket.emit('sendUsername', person);
    }
  }

  $('#submitbutton').click(function() {
    setMessage(person, $("#message").val());
    $("#message").val("");
  });

});

function setMessage(username, msg) {
  // var notityobj=document.getElementById("chat");
  // notityobj.innerHTML=notityobj.innerHTML+'<p><strong>'+username+'</strong>: '+msg+'</p>';
  // notityobj.scrollTop = notityobj.scrollHeight;

  socket.emit("msg", {"username":username,"message":msg})
}
