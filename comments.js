// Create web server
// 1. Include http module
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

// 2. Create server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    // 3. Read file
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
console.log('Server running at http://