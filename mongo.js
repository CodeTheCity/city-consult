(function(){

  module.exports.connect = function(){
    var express= require('express');
    mongoose=require('mongoose');
    //var application = express();
    //Connecting to the mongodb database
    console.log('Attempting to connect to the database...');
    mongoose.connect('mongodb://username:password@ds161209.mlab.com:61209/cityconsultdb');
    //Creating a schema for how the data will look like
    cityConsultSchema=new mongoose.Schema({
    	currentSituation: String,
    	positiveResult:String,
    	negativeResult: String,
    	yourDesicion: Boolean
    });

    //Creating a model

    // Getting data from mongodb
    //returns all items in the database
    //cityConsultModel.find({}, function(err,data){
    	//if (err) throw err;

    //});
    //return speific elements:
    //cityConsultModel.find({currentSituation:'Bad Roads on union street'});
    /*var rout=express.Router();
    rout.get('/',function(req,res,next){
    //mapping the  City-Consult page to the client
    	res.render('index',{title:'City-Consult'});
    });*/
    //to make the router function available to other files outside this Script.js module
    //module.exports=rout;
    //setting the port number for nodejs to listen to
    //incase you have other appliations running on that server it helps node identify when to act you canalso add an ip to this
  //  application.listen('1337');
    console.log('Connection to database successful!');
  };
  module.exports.save = function(stdin){
  var cityConsultModel = mongoose.model('Consult',cityConsultSchema);
  var consult1 = cityConsultModel(stdin).save(function(err){
    if (err) throw err;
    console.log('item saved sucessfully');
  });
  };
  module.exports.findCons = function(){
    var cityConsultModel = mongoose.model('Consult',cityConsultSchema);
    return cityConsultModel.find({}, function(err,data){
    	if (err) throw err;
      return data;
    });
    var x = cityConsultModel.find({}, function(err,data){
    	if (err) throw err;
      console.log('I found it');
      console.log (data)
      console.log('I found it2');
      return data;
    });
    console.log (x);
    console.log('I found it3');
    //return(x);
  };

  module.exports.findPros = function(){
    var cityConsultModel = mongoose.model('Consult',cityConsultSchema);
    cityConsultModel.find({positiveResult}, function(err,data){
    	if (err) throw err;
      console.log('I found it');
    });
  };
}());
