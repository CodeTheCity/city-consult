/*
Robutt
An AI dog for you to train
*/
(function(){
  //global variable go here

  module.exports.setup = function(){
    //set-up function used when bot is first called

  },

  module.exports.conv = function(stdin){
    //main bot lives here
    var stdout = "";
    var splitstring = stdin.toUpperCase().split(" ");
    //bot logic goes here

    //demo response
    var stdout = "I am a demo response!";
    return stdout;
  }
}());
