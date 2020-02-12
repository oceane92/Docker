var http = require('http'),
io = require('socket.io');

var server = http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Test de connection\n');
}).listen(4567);

// Console will print the message
console.log('Server running at http://127.0.0.1:4567/');

// Envoi de la requête connexion
io = io.listen(server);
io.sockets.on('connection', function(socket){
  console.log('Client connected.');
  socket.on('disconnect', function() {
  console.log('Client disconnected.');
  });
});

// Reception de la requête
var socket = io.connect('http://127.0.0.1:5372', {reconnect: true});
socket.on('connect', function(socket) { 
   console.log('Pong !');
});