var http = require('http');

var server = http.createServer(function (req, res) {
  res.end('<h1>your server hostname here</h1>');
});

server.on('error', function (err) {
  console.log(err);
});

server.listen(80, function () {
  address = server.address();
  console.log('opened server on %j', address);
});

