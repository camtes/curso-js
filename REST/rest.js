#!/usr/bin/env node

var https = require('http');

var options = {
    host: 'babole.si2.ninja',
    path: '/SI2API/notifications',
    method: 'GET',
    headers: {'User-Agent': 'Prueba-Node-App'}
};

var req = https.get(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (datos_JSON) {
  	var datos=JSON.parse(datos_JSON);
  	console.log('type: ' + datos[0].type+ "\nTitulo: " + datos[0].alert +
    "\nMensaje: " + datos[0].message);
    });
});
req.end();
