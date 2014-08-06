var express = require("express");
var app = express();
var port = Number(process.env.PORT || 5000);

app.configure(function(){
	app.use(express.static(__dirname+"/public"));
});

app.get('/', function(req, res) {
	res.render("index.html");
});

app.get('/2', function(req, res) {
	res.render("index2.html");
});

app.get('/3', function(req, res) {
	res.render("index3.html");
});

app.listen(port, function() {
  console.log("Listening on " + port);
});



  

