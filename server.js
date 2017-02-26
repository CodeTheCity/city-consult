// client socket.io
var client = require('socket.io').listen(8080).sockets;
var seed = Math.random();
var bot = require("./bot.js"); //imports bot script
mongo = require("./mongo.js"); //imports mongo script for database
mongo.connect(); //connect to teh mongo datbase

//on new client connection
client.on('connection',function(socket){
  //log that client is connected
  var userstage = "currentSituation";
  var userobj = {};
  var Cons = [];
  var Pros = [];
  console.log('New client detected');
  //send a message to client (can also send objects)
  socket.emit('output',"########################");
  socket.emit('output',"You have been connected!");
  socket.emit('output',"########################");

  //preload some database items to discuss with user later in session
  //these are async calls but all get logged to a local variable for later use
  mongo.findCons().then(function(data){
    Cons[0] = data[Math.round(Math.random()*data.length)]['negativeResult'];
    Cons[1] = data[Math.round(Math.random()*data.length)]['negativeResult'];
    Cons[2] = data[Math.round(Math.random()*data.length)]['negativeResult'];
    Pros[0] = data[Math.round(Math.random()*data.length)]['positiveResult'];
    Pros[1] = data[Math.round(Math.random()*data.length)]['positiveResult'];
    Pros[2] = data[Math.round(Math.random()*data.length)]['positiveResult'];
    console.log ("> 3 random existing positive reasons", Pros);
    console.log ("> 3 random existing negative reasons", Cons);
  });

  var stdout = "";
  stdout = bot.setup();
  for (var i in stdout) {
    socket.emit('output',stdout[i]);
  }
  //on client input of name 'input'
  socket.on('input', function(stdin){
    stdout = "";
    //userstage = Math.floor(userstage + 10);
    stdout = bot.conv(stdin, userstage, userobj);
    userstage = stdout[0];
    userobj = stdout[1];
    stdout.shift() //remove first element in array
    stdout.shift()
    for (var i in stdout) {
      socket.emit('output',stdout[i]);
    }
    });
  });
