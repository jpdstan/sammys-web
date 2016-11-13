var http = require("http");
var request = require('request').defaults({encoding:null});
var express = require("express");
var app = express();
app.use(express.static('app'));

http.createServer(app, function(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end();
}).listen(process.env.PORT || 8080, function() {
	if (process.env.PORT)
		debug("Running on port " + process.env.PORT);
	else
		debug("Running on port 8080");
});

function debug(text) {
	console.log(getTime() + " [Sammys-Debug] " + text);
}

function getTime() {
  var d = new Date();
  var datestring = d.toISOString().replace(/([T])/g, " ");
  datestring = datestring.substring(0,datestring.indexOf("."));
  return datestring;
}