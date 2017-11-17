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
  
});
let id=10000;
const prediction_cats=["cat","dog","forest","people","exam","building"]

function data_generator(){
    return {
        event_id:id++,
        starting_timestamp:new Date().getTime(),
        prediction:prediction_cats[parseInt(Math.random()*prediction_cats.length)],
        camera_id:Math.random()*1000,
        thumbnail: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/sign-check-icon.png'
    };
}

function EmitMessage(){
    console.log("emit");
    io.sockets.emit('action', {type:'event', data:[data_generator()]});
    setTimeout(EmitMessage,Math.random()*5000);
}
EmitMessage();