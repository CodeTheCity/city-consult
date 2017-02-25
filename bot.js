/*
Robutt
An AI dog for you to train
*/
(function(){
  var action = [];
  var object = [];
  var words = [];
  var old_command = [];
  var old_action = 0;
  var old_object = 0;
  var boredness;
  module.exports.setup = function(){
    var range = 100;
    action[0] = ["sat on",Math.random()*range];
    action[1] = ["barked at",Math.random()*range];
    action[2] = ["growled at",Math.random()*range];
    action[3] = ["sniffed",Math.random()*range];
    action[4] = ["pawed",Math.random()*range];
    action[5] = ["jumped on",Math.random()*range];
    action[5] = ["jumped over",Math.random()*range];
    action[6] = ["lay on",Math.random()*range];
    action[7] = ["chased",Math.random()*range];

    object[0] = ["the floor",Math.random()*range];
    object[1] = ["the sofa",Math.random()*range];
    object[2] = ["its butt",Math.random()*range];
    object[3] = ["its nose",Math.random()*range];
    object[4] = ["the ball",Math.random()*range];
    object[5] = ["the box",Math.random()*range];
    object[6] = ["the treats",Math.random()*range*5];

    boredness = Math.random()*20;

  },

  module.exports.boredom = function(){
    return (boredness);
  },

  module.exports.conv = function(stdin){
    //[verb ("Robutt SAT down"), chance]
    var stdout = "";
    var splitstring = stdin.toUpperCase().split(" ");
    if (boredness > 1){boredness *= 0.95;}
    //bot logic goes here
    if (splitstring[0] == "TREAT"||splitstring[0] == "GOOD"){
      boredness *= 2;
      // when treated reinforce last action and object
      action[old_action][1] *= 1.5;
      object[old_object][1] *= 1.5;
      var found = false;
      if (old_command.length > 0){
        if ((old_command[0] != "") && (old_command[0] != "TREAT")){
          for (j=0; j<old_command.length;j++){
            found = false;
            for (i=0; i<words.length;i++){
              if (words[i][0] == old_command[j]){
                words[i][1][old_action] *= (1 + (1/old_command.length));
                words[i][2][old_object] *= (1 + (1/old_command.length));
                found = true;
              }
            }
            // if its a new word add it to the list and init
            if (found == false) {
              var next = words.length;
              words[next] = [];
              words[next][0] = old_command[j];
              words[next][1] = [];
              words[next][2] = [];
              for (i=0; i<action.length;i++){
              words[next][1][i] = 10;
              }
              for (i=0; i<object.length;i++){
              words[next][2][i] = 10;
              }
              words[next][1][old_action] = 10 * (1+(1/old_command.length));
              words[next][2][old_object] = 10* (1+(1/old_command.length));
            }
          }
        }
      }
    }

    //forget words over time if not used
    //for (i=0; i<words.length; i++){
      //words[i] *=0.99;
    //}

    old_command = splitstring;
    action_weights = weights(splitstring,1);
    object_weights = weights(splitstring,2);
    old_action = selector(action, action_weights);
    old_object = selector(object, object_weights);
    stdout = "Robutt " + action[old_action][0] + " " + object[old_object][0];
    return (stdout);
  }
  var selector = function(list, weights){
    //selects a random item from the list based on probabilities from both
    //the default list and the additional weights
    var stdout = "";
    //total all probabilities
    var total = 0;
    var i = 0;
    for (i = 0; i < list.length; i++){
      if (!weights[i]){weights[i]=0;}
      total += (list[i][1] + weights[i]);
    }
    var prob = Math.random()*total;
    var subtotal = 0;
    i = 0;
    while (prob > subtotal){
      subtotal += (list[i][1]+ weights[i]);
      i += 1;
    }
    i -=1;
    stdout = i;

    // makes randomly repeating this actions less likely over time
    // this is really a boredom factor
    list[i][1] *= 0.95;

    return (stdout);
  }
  var weights = function (command,type){
    //calcualte the added weights to give possible
    //outcomes based on command
    var templist = [];
    for (j=0; j<command.length;j++){
      for (i=0; i<words.length;i++){
        if (words[i][0] == command[j]){
          for (k=0; k<words[i][type].length;k++){
            if(templist[k]){
              templist[k] += words[i][type][k];
            }else {
              templist[k] = words[i][type][k]
            }
          }
        }
      }
    }
    return (templist);
  }
}());
