(function(){
  module.exports.conv = function(stdin){
    var stdout = "";
    var splitstring = stdin.toUpperCase().split(" ");

    //bot logic goes here
    if (splitstring[0] == "HELLO"){
      stdout = "hi";
    }else{
      stdout = "I dont know what you mean? [" + stdin + "]";
    }

    return (stdout);
  }
}());
