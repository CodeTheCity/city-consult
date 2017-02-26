/**
 *
 */
var express= require('express');
var mysql = require('mysql');
var mongoose=require('mongoose');
var application = express();
//Connecting to the mongodb database
mongoose.connect('mongodb://username:password@ds161209.mlab.com:61209/cityconsultdb');
//Creating a schema for how the data will look like
var cityConsultSchema=new mongoose.Schema({
	currentSituation: String,
	positiveResult:String,
	negativeResult: String,
	yourDesicion: Boolean
});

//Creating a model
var cityConsultModel = mongoose.model('Consult',cityConsultSchema);
var consult1 = cityConsultModel({currentSituation:'masfadffdbjodvns' ,
positiveResult:' hbgfghfgfhgdfhghjkn',
negativeResult: 'ghkghfkdhgdhgdf',
yourDesicion:true}).save(function(err){
	if (err) throw err;
	console.log('item saved sucessfully');
});
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
var myConnection = mysql.createConnection({
	host: 'localhost',
	user:'root',
	password: '',
	database: 'mytrialDB'
});

myConnection.connect(function(error){

	if(!!error){
		console.log('Error');
	}
	else{
		console.log('Connected');
	}
});
application.get('/',function(req, resp){
	myConnection.query("SELECT * FROM sampletable",function(error,rows,fields){
		if(!!error){
			console.log('Error in the query');
		}else{
			console.log('Successful \n');
			console.log(rows);
			resp.json(rows);
		}
	});

});
//To prevent SQL injection there is need to use the escape() method when using user input data to query the database
var id="2"
//var idd = "2; drop table sampletable;"
application.get('/',function(req, resp){
myConnection.query("SELECT * FROM sampletable WHERE id ="+myConnection.escape(id),function(error,rows,fields){
	if(!!error){
		console.log("Error in your Query");
	}else{
		console.log(rows);
		resp.json(rows);
	}
});
});
var sampleData = {
	currentSituation: "Increase bus Frequency",
	positiveResult: "People will get to their destination earlier",
	negativeResult: "It will cost more money",
	yourDesicion: "No"
};

var reply=myConnection.query("INSERT INTO sampleTable set?", sampleData, function(err,result){
	if (err){
		return console.error(err);
	}else{console.error(result)}
	//console.log(reply.sql);
});
//setting the port number for nodejs to listen to
//incase you have other appliations running on that server it helps node identify when to act you canalso add an ip to this
application.listen('1337');
console.log('Now listening on port 1337');
