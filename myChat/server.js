const WebSocket = require('ws');
const http = require("http");
const uuid = require('node-uuid');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('I am building a Node Http Server!');
}).listen(10087);

const wss = new WebSocket.Server({port:8906});

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function (ws) {
  var client_uuid = uuid.v4();
  console.log('client connected');
  ws.on('message', function (data) {
    wss.broadcast(data);
  });
});

wss.on('close', function() {
  for (var i = 0; i < clients.length; i++) {
    var client = clients[i];
    if (client === socket) {
      clients.splice(i, 1);
    }
  }
});
