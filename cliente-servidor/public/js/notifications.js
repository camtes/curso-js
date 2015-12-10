var socket = io.connect("http://localhost:8080");

socket.on('connect', function() {
    var notityobj=document.getElementById("notify");
	   notityobj.innerHTML=notityobj.innerHTML+'<p><strong> Server Conectado </strong></p>';
	    notityobj.scrollTop = notityobj.scrollHeight;
});

socket.on('receive', function(msg) {
    console.log(msg);
    var notityobj=document.getElementById("notify");
    notityobj.innerHTML=notityobj.innerHTML+'<p>'+msg+'</p>';
    notityobj.scrollTop = notityobj.scrollHeight;
});

socket.on('disconnect', function() {
    var notityobj=document.getElementById("notify");
	notityobj.innerHTML=notityobj.innerHTML+'<p><strong> Server Desconectado </strong></p>';
	notityobj.scrollTop = notityobj.scrollHeight;
});

function myFunction() {
    console.log("click");
    var i = Math.floor((Math.random() * 10) + 1);

    if ( i % 2 == 0)
      socket.emit('msg', 'Un mensaje');
    else
      socket.emit('msg', 'Otro mensaje');
}
