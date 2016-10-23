var http = require('http');

var server = http.createServer(function (req, res) {
  res.end('<h1>' + process.env.HOSTNAME + '</h1>');
});

server.on('error', function (err) {
  console.log(err);
});

server.listen(process.env.PORT, function () {
  address = server.address();
  console.log('opened server on %j', address);
});
