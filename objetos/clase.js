#!/usr/bin/node

exports.Clase = function (nombre, num_examenes) {
  this.nombre = nombre;
  this.num_examenes = num_examenes
  this.examenes = new Array(num_examenes);
  this.setNota = setNota;
  this.toString = toString;
}

function setNota ( examen, nota ) {
    this.examenes[examen] = nota;
}

function toString() {
  var media = 0;

  for (var i=0;i<this.num_examenes; i++) {
    media = media + this.examenes[i];
  }

  media = media / this.num_examenes;

  return this.nombre+" ha tenido "+this.num_examenes+" y su nota media ha sido un "+media+".";
}
