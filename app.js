var express = require('express');
var bodyParser = require('body-parser'); // middleware for parsing request body.
var app = express();
app.use(bodyParser.text({ extended: true }));

var mjAPI = require("mathjax-node/lib/mj-page.js");
mjAPI.start();

app.get('/', function (req, res) {
  mjAPI.typeset({
    html: "<p style='white-space:pre-wrap;font-weight:bold;color: #79ae3d; '>Some random text in the page and now the equation:  $ \\Gamma(z) = \\int_0^\\infty t^{z-1} $ <p/>",
    inputs: ["TeX"]
  }, function (result) {
    res.send(result.html);
  });
});

app.post('/', function (req, res) {
  mjAPI.typeset({
    html: req.body,
    inputs: ["TeX"]
  }, function (result) {
    res.send(result.html);
  });
});

var server = app.listen(8888, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});
