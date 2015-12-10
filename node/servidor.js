// #!/usr/bin/env node
var http = require('http');
var https = require('https');

var contador = 0;

http.createServer(function (request, response) {
  console.log("Nueva conexión");
  contador++;

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("hola!! (:\n");
  response.write("\nYa tenemos "+contador+" visitas.");
  response.end();
}).listen(8080);

console.log("Servidor funcionando en http://localhost:8080");
