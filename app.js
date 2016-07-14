var express = require('express');
var bodyParser = require('body-parser'); // middleware for parsing request body.
var app = express();
app.use(bodyParser.text({ extended: true }));

var mjAPI = require("mathjax-node/lib/mj-single.js");
mjAPI.start();

app.get('/', function (req, res) {
  mjAPI.typeset({
    math: "\\Gamma(z) = \\int_0^\\infty t^{z-1}",
    format: "TeX",
    svg: true
  }, function (result) {
    res.send(result.svg);
  });
});

app.post('/', function (req, res) {
  mjAPI.typeset({
    math: req.body,
    format: "TeX",
    svg: true
  }, function (result) {
    res.send(result.svg);
  });
});

var server = app.listen(8888, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});
