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

  module.exports.conv = function(stdin, userstage, userobj){
    //clear stdout. Just to be safe!
    var stdout = [];

    //Split the stdin into an UPPERCASE array divided by "space"
    var splitstring = stdin.toUpperCase().split(" ");
    //bot logic goes here
    stdout[0] = userstage;
    stdout[1] = userobj
    switch (stdout[0]){
      case "currentSituation":
        stdout[0] = "positiveResult"
        stdout[1][userstage] = stdin;
        stdout[2] = "What would be the positive impact of this action?"
        break;
      case "positiveResult":
        stdout[0] = "negativeResult"
        stdout[1][userstage] = stdin;
        stdout[2] = "What would be a negative impact of this action?"
        break;
      case "negativeResult":
        stdout[0] = "yourDesicion"
        stdout[1][userstage] = stdin;
        stdout[2] = "On the whole, do you think we should progress with this action? "
        break;
      case "yourDesicion":
        stdout[0] = "END"
        stdout[1][userstage] = stdin;
        console.log(stdout[1]);
        mongo.findCons().then(function(data){
          console.log(data, 'after async');
        }); //*********************
        mongo.save(stdout[1]); //push data to database
        stdout[2] = "Thanks, thats been really helpful!"
        stdout[3] = "Bye now, have a nice day. (referesh to do this again)"
        break;
      default:
        ///go away
        stdout[2] = "I said Bye."
        break;
    }

    return stdout;
  }
}());
