var P2P = require('socket.io-p2p');
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000');

var opts = { autoUpgrade: false, numClients: 10 };
var p2psocket = new P2P(socket, opts)

p2psocket.on('connect', function () {
  console.log('Connected to the server');
})

p2psocket.on('peer-msg', function (data) {
  console.log(data);
});

p2psocket.on('go-private', function () {
  p2psocket.upgrade(); // upgrade to peerConnection
  socket.close();
});


window.start = function () {
  p2psocket.upgrade();
  p2psocket.emit('go-private');
  socket.close();
}

window.send = function (data) {
  p2psocket.emit('peer-msg', data);
}