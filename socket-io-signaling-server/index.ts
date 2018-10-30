var server = require("http").createServer();
var p2pserver = require("socket.io-p2p-server").Server;
var io = require("socket.io")(server);
io.use(p2pserver);

io.on("connection", function(socket) {
    console.log("A new client connection established");

    socket.on("peer-msg", function(data) {
      console.log("Message from peer: %s", data);
      socket.broadcast.emit("peer-msg", data);
    });

    socket.on("go-private", function(data) {
      console.log('BROADCASTING GO PRIVATE');
      socket.broadcast.emit("go-private", data);
    });
});

server.listen(3000, function() {
  console.log("HTTP | WS server started");
});
