// 1. Import the http library
const { createServer } = require('http');

const fs = require('fs');
const path = require('path');

// 2. Set the hostname and the port
const hostname = '127.0.0.1' // = localhost:3000
const port = 3001;

// 3. Create a new server with createServer() from http
const server = createServer(function (request, response) {
    // Handle root path request
    if (request.url === '/' || request.url === '/index.html') {
        const pathToIndexHtml = path.join(__dirname, 'index.html');
        fs.readFile(pathToIndexHtml, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                response.statusCode = 404;
                response.setHeader('Content-Type', 'text/plain')
                response.end('Sorry file not found.');
                return;
            }
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        });
        return;
    }

    // Handle other file types
    const ext = path.extname(request.url);
    if (ext === '.js' || ext === '.css') {
        const filePath = path.join(__dirname, request.url);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                response.statusCode = 404;
                response.setHeader('Content-Type', 'text/plain')
                response.end('File not found.');
                return;
            }
            response.statusCode = 200;
            if (ext === '.js') {
                response.setHeader('Content-Type', 'text/javascript');
            } else if (ext === '.css') {
                response.setHeader('Content-Type', 'text/css');
            }
            response.end(data);
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end('File type not supported.');
    }
});

// 5. Set the server to listen to the port
server.listen(port, hostname, () => {
    console.log('Server is listening to port:', port);
})

