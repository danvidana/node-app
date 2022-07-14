// const express = require('express');
// const { readFile } = require('fs').promises;

const { application } = require("express");

// const app = express();

// app.get('/', async (request, response) => {
//     response.send( await readFile('./home.html', 'utf-8'));
// })

// app.get('/', (request, response) => {
//     readFile('./home.html','utf-8', (err, html) => {

//         if (err) {
//             response.status(500).send('sorry, ouf of order');
//         }

//         response.send(html);
//     })
// });

// app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`));

// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// person1.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => {
//     console.log('Called Listener', data)
// });

// logger.log('Hello World');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url == '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) {
    //             throw err;
    //         }
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }else if(req.url == '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40 },
    //         { name: 'John Doe', age: 30 },
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/png';
            break;
    };

    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type' : 'text/html'});
                    res.end(content), 'utf8';
                })
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
