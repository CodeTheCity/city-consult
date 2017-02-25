/*
City_consults
25-02-2017
Main bot logic for teh bot is stored here. Needs Server.js to run.
*/
(function(){
  //global variable go here

  module.exports.setup = function(){
    //set-up function used when bot is first called
    var stdout = [];
    stdout[0] = "Welcome. There are several topics that are currently under consultation.";
    stdout[1] = "  A. The city should pedestrianise Union Street.";
    stdout[2] = "  B. The city should fund daycare.";
    stdout[3] = "  C. The city should build a dedicated tramline.";
    stdout[4] = "Please state your views on one topic, and then we can continue.";
    return stdout;
  },

  module.exports.conv = function(stdin){
    //clear stdout. Just to be safe!
    var stdout = [];

    //Split the stdin into an UPPERCASE array divided by "space"
    var splitstring = stdin.toUpperCase().split(" ");
    //bot logic goes here

    //demo response
    stdout[0] = "I am a demo response!";

    return stdout;
  }
}());
