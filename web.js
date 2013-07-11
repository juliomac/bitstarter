var express = require('express');
// var fs = require('fs');
// var buffer = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  var message = buffer.toString(fs.readFileSync(index.html));
  var message = fs.readFileSync(index.html,utf8);
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
