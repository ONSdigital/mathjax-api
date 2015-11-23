var express = require('express');
var app = express();
var mjAPI = require("mathjax-node/lib/mj-single.js");
mjAPI.start();

app.get('/', function (req, res) {
  mjAPI.typeset({
    math: "\\Gamma(z) = \\int_0^\\infty t^{z-1}",
    inputs: ["TeX"],
    svg:true
  }, function (result) {
    res.send(result.svg);
  });
});

app.post('/', function (req, res) {
  mjAPI.typeset({
    math: req.body,
    inputs: ["TeX"],
    svg:true
  }, function (result) {
    res.send(result.svg);
  });
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});
