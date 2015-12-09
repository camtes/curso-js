#!/usr/bin/node
var NUM_EXAMENES = 5;

var clase = require('./clase.js');
var alumno = new Array;
var nombreAlumnos = new Array('Pepito','Jaimito','Mariquilla','Mariola');

for (var alu=0; alu<nombreAlumnos.length; alu++) {
  alumno[alu] = new clase.Clase(nombreAlumnos[alu], NUM_EXAMENES);
  for (var i=0; i<NUM_EXAMENES; i++) {
      alumno[alu].setNota(i,Math.floor((Math.random() * 10) + 1));
  }
}

for (var alu=0; alu < nombreAlumnos.length; alu++) {
  console.log(alumno[alu].toString());
}
