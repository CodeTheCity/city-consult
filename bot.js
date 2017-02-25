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
    stdout[1] = "It would be great is you could help us with the following discussion:"
    stdout[2] = "  Aberdeen City Council is connsidering pedestrianising Union Street?"
    stdout[3] = "We'd like to hear your thoughts on this."
    stdout[4] = "Firstly,"
    stdout[5] = "  Can you please decribe how you feel about the current situation on Union Street."
    return stdout;
  },

  module.exports.conv = function(stdin, userstage){
    //clear stdout. Just to be safe!
    var stdout = [];

    //Split the stdin into an UPPERCASE array divided by "space"
    var splitstring = stdin.toUpperCase().split(" ");
    //bot logic goes here
    stdout[0] = userstage + 10;
    switch (stdout[0]){
      case 10:
        stdout[1] = "What would be the positive impact of this action?"
        break;
      case 20:
        stdout[1] = "What would be a negative impact of this action?"
        break;
      case 30:
        stdout[1] = "On the whole, do you think we should progress with this action? "
        break;
      default:
        stdout[1] = "Thanks, thats been really helpful!"
        stdout[2] = "Bye now, have a nice day. (referesh to do this again)"
        break;
    }

    //demo response
    //stdout[0] = "I am a demo response!";

    return stdout;
  }
}());
