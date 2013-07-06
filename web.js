var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var indexHtmlContext = fs.readFileSync("index.html").toString();

app.get('/', function(request, response) {
  response.send(indexHtmlContext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
