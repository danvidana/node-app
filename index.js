// const express = require('express');
// const { readFile } = require('fs').promises;

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

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => {
    console.log('Called Listener', data)
});

logger.log('Hello World');