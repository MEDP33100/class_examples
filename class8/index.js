// 1. import the http library
const { createServer } = require('http');
const fs = require('fs');
const path = require('path');

// 2. set the hostname and the port
const hostname = '127.0.0.1'; // 127.0.0.1 = localhost 
const port = 3000; // port = can be 3000, 3001, 8000, 8001...

// 3. Create a new server with createServer() 
const server = createServer(function (req, res) {
    // use fs to get the index.html file and return in the response
    const filePath = path.join(__dirname, 'index.html')
    fs.readFile(filePath, 'utf-8', function (error, data) {
        if (error) {
            console.log('couldnt find the file');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('File not found.');
            return;
        }
        res.statusCode = 200;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(port, hostname, function () {
    console.log('Server is running on port:', port)
});