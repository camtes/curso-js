var person = null;
var server = window.location.href;
var socket = io.connect(server);
var idUser = null;

// salgo del chat
$(window).bind("beforeunload", function() {
  socket.emit("logout", idUser);
  ;
})

$(document).ready(function(){
  // creo al usuario
  if (person == null) {
    // Solicito al usuario que introduzca su nombre de usuario
    var person = prompt("Please enter your username", "Mr. Robot");
    if (person != null) {
      // Pongo el nombre en el campo del chat
      $("#username").html("<p>"+person+"</p>");
      // Envio al servidor el nombre de usuario para poder crear el objeto
      socket.emit('newUser', person);
      // Recibo el el id de usuario y lo almaceno
      socket.on('getUserId', function(userId) {
        idUser = userId;
      });
    }
  }

  // botón enviar
  $('#submitbutton').click(function() {
    socket.emit("setMessage", {"id":idUser,"message":$("#message").val()})
    $("#message").val("");
  });

  // me conecto al servidor
  socket.on('connect', function() {
      $("#status").html('<p>Status: <strong> connected </strong></p>');
  });

  // me desconecto del servidor
  socket.on('disconnect', function() {

  });

  // recibo un nuevo mensaje
  socket.on('newMessage', function(content) {
    $("#chat").append(content);
    $('#chat').scrollTop($('#chat')[0].scrollHeight);

  });

  socket.on("userOnline", function(userOnline) {
    $("#usersConnected").html("<h4> Users online </h4>");
    for (var i=0; i<userOnline.length; i++) {
      $("#usersConnected").append("<p>"+userOnline[i].name+"</p>");
    }
  });
});
