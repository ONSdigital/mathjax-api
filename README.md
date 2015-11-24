# mathjax-api
A Node.js HTTP API to render MathJax equations in HTML content

This service uses the MathJax-node implementation that is optimised for mathjax embedded in HTML content. It is currently limited to LaTex to SVG conversion, but feel free to extend it :)

Defaults port 8080.

Node usage: 
```
$ node app.js
```

Test the server is working by doing a HTTP GET or navigate to http://localhost:8080

```
$ curl http://localhost:8080
```

To post content to the service for conversion, put your content in the "input" field using a application/x-www-form-urlencoded format:

```
$ curl --data "input=$ \\Gamma(z) = \\int_0^\\infty t^{z-1} $" http://localhost:8080
```



