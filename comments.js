// Create web server
// To run: node comments.js

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log("Request: " + req.url);
    if (req.url === "/") {
        fs.readFile("./index.html", function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (req.url === "/style.css") {
        fs.readFile("./style.css", function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });
    } else if (req.url === "/comments") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Comments");
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("Page not found");
        res.end();
    }
});

server.listen(8080);
console.log("Server is listening on port 8080");

