var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {

fs.readFile('index.html', function (err, data) {
	if (err) throw err;
	var buffer = new Buffer(data);
	response.send(buffer.toString('utf-8'));
    });




});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
fs.readFile('index.html', function (err, data) {
	if (err) throw err;
	var buffer = new Buffer(data);
      console.log(buffer.toString('utf-8'));
    });

});
