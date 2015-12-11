var person = null;
var socket = io.connect("http://localhost:8080");

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

socket.on('sendUsername', function() {
  socket.emit('username', person);
})

$(document).ready(function(){
  // Solicito al usuario que introduzca su nombre de usuario
  if (person == null) {
    var person = prompt("Please enter your username", "Mr. Robot");
    if (person != null) {
      var notityobj=document.getElementById("username");
      notityobj.innerHTML=notityobj.innerHTML+'<p>'+person+'</p>';
    }
  }

  $('#submitbutton').click(function() {
    setMessage(person, $("#message").val());
    $("#message").val("");
  });

});

function setMessage(username, msg) {
  var notityobj=document.getElementById("chat");
  notityobj.innerHTML=notityobj.innerHTML+'<p><strong>'+username+'</strong>: '+msg+'</p>';
  notityobj.scrollTop = notityobj.scrollHeight;
}
