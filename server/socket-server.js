var http = require('http');
var server = http.createServer();
var socket_io = require('socket.io');
server.listen(6000);
var events = require('events');
const serverEmitter = new events.EventEmitter();
var io = socket_io();
io.attach(server);
io.on('connection', function(socket){
  console.log("Socket connected: " + socket.id);
  /*socket.on('action', (action) => {
    if(action.type === 'server/hello'){
      console.log('Got hello data!', action.data);
      socket.emit('action', {type:'message', data:'good day!'});
    }
  });
  serverEmitter.on('newFeed', function (data) {
    // this message will be sent to all connected users
    socket.emit(data);
  });*/
});

function EmitMessage(){
    io.sockets.emit('server/hello',{msg:'abc'});
    setTimeout(EmitMessage,5000);
}
EmitMessage();