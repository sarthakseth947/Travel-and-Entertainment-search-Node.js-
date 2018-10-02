var path = require("path");
var bodyParser = require("body-parser");
var request = require("request");
var express = require("express");

var app= express();



//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req,res){
	res.send('hello');
})



app.get("/second", function(req, res) {
var temp2 = req.query;
var next=temp2.nextpage;
console.log(next);
urlg="https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken="+next+"&key=AIzaSyA5oz6eKS9FcAqo65IXdbvo4o4YWd_FUGQ";
console.log(urlg);
request.get({
	    url: urlg,
	    json: true,
	    headers: {'User-Agent': 'request'}
	  }, (err, response, data) => {
	    if (err) {
	    	console.log('Error:', err);
	    } else if (res.statusCode !== 200) {
	    	console.log('Status:', response.statusCode);
	    } else {
	      // data is already parsed as JSON:
	      	console.log(data);
	      	res.setHeader('content-type', 'application/json');
			res.json(data);
	    }
	});

	});





app.get("/third", function(req, res) {
var temp3 = req.query;
var next1=temp3.nextpage1;
console.log(next1);
urlh="https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken="+next1+"&key=AIzaSyA5oz6eKS9FcAqo65IXdbvo4o4YWd_FUGQ";
console.log(urlh);
request.get({
	    url: urlh,
	    json: true,
	    headers: {'User-Agent': 'request'}
	  }, (err, response, data) => {
	    if (err) {
	    	console.log('Error:', err);
	    } else if (res.statusCode !== 200) {
	    	console.log('Status:', response.statusCode);
	    } else {
	      // data is already parsed as JSON:
	      	console.log(data);
	      	res.setHeader('content-type', 'application/json');
			res.json(data);
	    }
	});

	});



app.get("/info", function(req, res) {

	console.log(req.url);
	
	var temp = req.query;
	var symbol1 = encodeURI(temp.keyword);

	var symbol2=temp.Distance;
var symbol3=temp.type;
var symbol4=temp.lat;
var symbol5=temp.lon;


	

	console.log(symbol1);
console.log(symbol4);
	console.log(symbol5);


	urla="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+symbol4+","+symbol5+"&radius="+symbol2+"&type="+symbol3+"&keyword="+symbol1+"&key=AIzaSyA5oz6eKS9FcAqo65IXdbvo4o4YWd_FUGQ";
		console.log(urla);
		
		request.get({
	    url: urla,
	    json: true,
	    headers: {'User-Agent': 'request'}
	  }, (err, response, data) => {
	    if (err) {
	    	console.log('Error:', err);
	    } else if (res.statusCode !== 200) {
	    	console.log('Status:', response.statusCode);
	    } else {
	      // data is already parsed as JSON:
	      	// console.log(data);
	      	res.setHeader('content-type', 'application/json');
			res.json(data);
	    }
	});

	});


app.get("/data", function(req, res) {

	console.log(req.url);
	
	var temp1 = req.query;
	var info = encodeURI(temp1.keyword);
urlb="https://maps.googleapis.com/maps/api/geocode/json?address="+info+"&key=AIzaSyA5oz6eKS9FcAqo65IXdbvo4o4YWd_FUGQ";




	




		
		request.get({
	    url: urlb,
	    json: true,
	    headers: {'User-Agent': 'request'}
	  }, (err, response, data) => {
	    if (err) {
	    	console.log('Error:', err);
	    } else if (res.statusCode !== 200) {
	    	console.log('Status:', response.statusCode);
	    } else {
	      // data is already parsed as JSON:
	      	 console.log(data);
	      	res.setHeader('content-type', 'application/json');
	      	 res.json(data);
	      	
	    }
	});
			
	});

app.get("/yelp", function(req, res) {
var temp9 = req.query;

	var sym1 = encodeURI(temp9.placename);
		var sym2 = encodeURI(temp9.placeaddress);
		var sym3 = encodeURI(temp9.cityvalue);
		var sym4 = encodeURI(temp9.statevalue);
urll="https://api.yelp.com/v3/businesses/matches/best?name="+sym1+"&address1="+sym2+"&city="+sym3+"&state="+sym4+"&country="+temp9.countryvalue;
console.log(urll);
request.get({
	    url: urll,
	    json: true,
	    headers: {'User-Agent': 'request', 'Authorization': 'Bearer AnHkygvlS0idL9ja9g4cdYhad3CQmAGjUz0E_P43LvaFYADtVyZOiI8OaFWdz86o0QfSEWxooVLjUF3f6SZAMh6kB8oEw5iQ14EOSF1k4WLecSeY4bnIjiRxyLjJWnYx'}
	  }, (err, response, data) => {
	    if (err) {
	    	console.log('Error:', err);
	    } else if (res.statusCode !== 200) {
	    	console.log('Status:', response.statusCode);
	    } else {
	      // data is already parsed as JSON:
	      	console.log(data);
	      	res.setHeader('content-type', 'application/json');
			res.json(data);
	    }
	});

	});

app.get("/yelprev", function(req, res) {
var temp10 = req.query;

	var id = temp10.id;
		
var urlok="https://api.yelp.com/v3/businesses/"+id+"/reviews";
console.log(urlok);
request.get({
	    url: urlok,
	    json: true,
	    headers: {'User-Agent': 'request', 'Authorization': 'Bearer AnHkygvlS0idL9ja9g4cdYhad3CQmAGjUz0E_P43LvaFYADtVyZOiI8OaFWdz86o0QfSEWxooVLjUF3f6SZAMh6kB8oEw5iQ14EOSF1k4WLecSeY4bnIjiRxyLjJWnYx'}
	  }, (err, response, data) => {
	    if (err) {
	    	console.log('Error:', err);
	    } else if (res.statusCode !== 200) {
	    	console.log('Status:', response.statusCode);
	    } else {
	      // data is already parsed as JSON:
	      
	      	res.setHeader('content-type', 'application/json');
			res.json(data);
	    }
	});

	});

var port = process.env.PORT || 8081;
app.listen(port, function() {
console.log("Server started on port 8081");
});

