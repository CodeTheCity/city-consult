// client socket.io
var client = require('socket.io').listen(8080).sockets;
var seed = Math.random();
var bot = require("./bot.js"); //imports bot script

//on new client connection
client.on('connection',function(socket){
  //log that client is connected
  console.log('new client detected');
  //send a message to client (can also send objects)
  socket.emit('output',"########################");
  socket.emit('output',"You have been connected!");
  socket.emit('output',"########################");
  bot.setup();
  socket.emit('output',"The bot is ready for you....");
  //on client input of name 'input'
  socket.on('input', function(stdin){
    var stdout = "";
    stdout = bot.conv(stdin);
    socket.emit('output',stdout);
    });
  });
