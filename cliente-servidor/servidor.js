var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.redirect('/client.html');
});

io.on('connection', function (socket) {
    socket.emit('receive', "hola anonimo");

    socket.on('msg', function (content) {
        console.log("Received:"+content);
        socket.emit('receive', content);
      });

    socket.on('disconnect', function () {
        console.log('User disconnected');
    });
});

http.listen(8080, function() {
	console.log("Escuchando el puerto 8080");
});
