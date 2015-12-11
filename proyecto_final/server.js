var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var numUser = 0;
var userConected = [];
app.use(express.static('public'));

io.on('connection', function (socket) {
  userConected[0] = numUser;
  numUser++;

  socket.emit('status', "Connected");

  socket.on('msg', function (content) {
    console.log("Received:"+content.message);
    io.emit('receive', content);
  });

  socket.on('disconnect', function () {
    console.log('User disconnected');
    numUser--;
  });
});

http.listen(8080, function() {
	console.log("Escuchando el puerto 8080");
});
