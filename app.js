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
    svg: true,
    mml: true
  }, function (result) {
    res.send(result);
  });
});

app.post('/', function (req, res) {

  // Reinitialising mathjax as a crude fix to prevent errors leaving mathjax in a broken state.
  var mjAPI = require("mathjax-node/lib/mj-single.js");
  mjAPI.start();

  mjAPI.typeset({
    math: req.body,
    format: "TeX",
    svg: true,
    mml: true
  }, function (result) {
    res.send(result);
  });
});

var server = app.listen(8888, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});
