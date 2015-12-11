var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var user = require('./user.js');
var users = new Array;

app.use(express.static('public'));

io.on('connection', function (socket) {
  // estado conectado
  socket.emit('status', "Connected");

  // damos de alta el nuevo usuario
  socket.on('newUser', function(name) {
    // envío solo al cliente conectado su ID
    socket.emit('getUserId', users.length);
    var u = new user.User(users.length, name);
    users.push(u);
    console.log(name+" connected");
  });

  socket.on('setMessage', function (jsonMessage) {

    // genero el mensaje y lo envio a todos los clientes
    var message = users[jsonMessage.id].setMessage(jsonMessage.message);
    console.log(message);
    io.emit('newMessage', message);
  });

  socket.on('logout', function(idUser) {
    // Muestro mensaje en el log del servidor
    console.log(users[idUser].getName()+' disconnect');

    // Elimino al usuario del array
    var index = users.indexOf(users[idUser].getId());
    users.splice(index,1);
  });

  socket.on('disconnect', function (idUser) {
  });
});

http.listen(8080, function() {
	console.log("Escuchando el puerto 8080");
});
