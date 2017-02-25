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
    stdout[1] = "It would be great is you could help us with the following question:"
    stdout[2] = "  Do you think Aberdeen City Council should pedestrianise Union Street?"
    stdout[3] = "  Please Responed 'yes' or 'no'"

    return stdout;
  },

  module.exports.conv = function(stdin){
    //clear stdout. Just to be safe!
    var stdout = [];

    //Split the stdin into an UPPERCASE array divided by "space"
    var splitstring = stdin.toUpperCase().split(" ");
    //bot logic goes here
    for (var i in splitstring) {
      if ((splitstring[i] == "YES")||(splitstring[i] == "NO")) {
        stdout[0] = "Ok, great. Can you give a short reason why this would be a good idea for the city?";
      } else {
        stdout[0] = "Fantastic! Can you think of another reason for this initiative.";
      }
    }
    //demo response
    //stdout[0] = "I am a demo response!";

    return stdout;
  }
}());
