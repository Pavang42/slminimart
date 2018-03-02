var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var users = require('./routes/users');
var dailyReports = require('./routes/dailyReports');
var shiftDetails = require('./routes/shiftDetails');
var payDetails = require('./routes/payDetails');
//var imageDetails = require('./routes/imageCollections.js');

var app = express();

//express cors
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Origin,X-Requested-With, Content-Type,Accept,Authorization,sid');
	res.header('Access-Control-Allow-Methods','POST,GET,OPTIONS, DELETE,PUT');
	next();
});

app.use(express.static(__dirname + '/static'));
//app.use(multer({dest: './images/'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', users); // Actually Creating REST API 
app.use('/dailyReports', dailyReports);
app.use('/shiftDetails', shiftDetails);
app.use('/payDetails', payDetails);
//app.use('/imageDetails', imageDetails);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workforce', function(err) {
	if(err) {
		console.log('MongoDB: connection error', err);
	} else {
		console.log('MongoDB: connection successful');
	}
});

app.get('/', function(req, res){
//res.render('index.html');
//res.send("Hurry ! We have Node With Express running..");
});


// respond with "Hello World!" on the homepage
app.get('/employees', function (req, res) {
  res.send({ "employees":[
	{
	  "name":"Raj",
	   "age": 31,
	   "class":"JQuery, AngularJS",
	   "address":"1234 Stevens street, San Jose, CA"
	}
	,
	{
	  "name":"Mr Kumar",
	   "age": 23,
	   "class":"JAVA, SQL",
	   "address":"21212 london street, San Jose, CA"
	}
	,
	{
	  "name":"Mike Smith",
	   "age": 28,
	   "class":"C++, AngularJS, HTML5, CSS3",
	   "address":"22 will wood street, Santa Clara, CA"
	}
		]
   });
});


app.listen(1336, function(){
console.log('Ready on port 1336');
});


/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
*/