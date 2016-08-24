var tup = require('t-up');

tup(function(done) {
  var app = require('../server');
  var http = require('http');

  var port = process.env.PORT || 3000;

  var server = http.createServer(app);
  server.listen(port, () => {
    console.log('Bot Microservices listening on port', port, '!');
    done();
  });

});