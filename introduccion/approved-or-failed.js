#!/usr/bin/node

/**
* Carlos Campos
* ------------------
* Programa escrito en javascript, que lee un JSON de una lista de alumnos
* y a través de la función "ApprovedOrFail" devuelve por pantalla, quien
* está aprobado, suspenso y la cantidad de éstos.
*
* Bucle [x]
* If [x]
* Subrutinas[x]
* JSON[x]
**/
var approved = 0;
var fail = 0;

function ApprovedOrFailed(i) {
  if (i.nota >= 5) {
    console.log(i.nombre+" ha aprobado con "+ i.nota);
    approved++;
  }
  else {
    console.log(i.nombre+" ha suspendido con "+ i.nota);
    fail++;
  }
}

// Leo el archivo JSON descargado
var object = require('./approved-or-failed.json');

for (i in object.alumnos) {
  ApprovedOrFailed(object.alumnos[i]);
}

console.log("");
console.log("Número de aprobados: "+approved);
console.log("Número de suspensos: "+fail);
