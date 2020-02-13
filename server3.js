var http = require('http'),
io = require('socket.io');

var server = http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Test de connection\n');
}).listen(4567);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');

// Reception de la requête server 1
var socket = io.connect('http://127.0.0.1:4567', {reconnect: true});
socket.on('connect', function(socket) { 
   console.log('Connecter !');
});

// Reception de la requête server 2
var socket = io.connect('http://127.0.0.1:5372', {reconnect: true});
socket.on('connect', function(socket) { 
   console.log('Connecter !');
});