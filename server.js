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
  socket.emit('output',"Robutt is ready for you....");
  socket.emit('output',"say 'treat' when he does something good to reinforce the action");
  //on client input of name 'input'
  socket.on('input', function(stdin){
    var stdout = "";
    stdout = bot.conv(stdin);
    socket.emit('output',stdout);
    });
  setInterval(function(){
    console.log(1-Math.exp(-bot.boredom()));
    if (Math.random()>(1-Math.exp(-bot.boredom()))){
      stdout = bot.conv("");
      socket.emit('output',stdout);
    }
  }, 1000);
  });
