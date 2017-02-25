// client socket.io
var client = require('socket.io').listen(8080).sockets;
var seed = Math.random();
var bot = require("./bot.js"); //imports bot script

//on new client connection
client.on('connection',function(socket){
  //log that client is connected
  var userstage = 0;
  console.log('new client detected');
  //send a message to client (can also send objects)
  socket.emit('output',"########################");
  socket.emit('output',"You have been connected!");
  socket.emit('output',"########################");
  var stdout = "";
  stdout = bot.setup();
  for (var i in stdout) {
    socket.emit('output',stdout[i]);
  }
  //on client input of name 'input'
  socket.on('input', function(stdin){
    stdout = "";
    //userstage = Math.floor(userstage + 10);
    stdout = bot.conv(stdin, userstage);
    userstage = stdout[0];
    stdout.shift() //remove first element in array
    for (var i in stdout) {
      socket.emit('output',stdout[i]);
    }
    });
  });
