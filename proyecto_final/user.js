#!/usr/bin/node

exports.User = function(id, name) {
  this.id = id;
  this.name = name;
  this.getName = getName;
  this.getId = getId;
  this.setMessage = setMessage;
}

function getName() {
  return this.name;
}

function getId() {
  return this.id;
}

function setMessage ( msg ) {
  return "<p><strong>"+this.name+"</strong>: "+msg+"<p>";
}
