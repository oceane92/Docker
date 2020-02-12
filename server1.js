var http = require('http'),
io = require('socket.io');

var server = http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(5372);

// Console will print the message
console.log('Server running at http://127.0.0.1:5372/');

// Envoi de la requête connexion
io = io.listen(server);
io.sockets.on('connection', function(socket){
  console.log('Client connected.');
  socket.on('disconnect', function() {
  console.log('Client disconnected.');
  });
});

var socket = io.connect('http://127.0.0.1:4567', {reconnect: true});
socket.on('connect', function(socket) { 
   console.log('Ping !');
});
