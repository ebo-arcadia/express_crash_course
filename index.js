const express = require('express');
const path = require('path')
const members = require('./Members')

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

// init middleware
app.use(logger);

// create routes to get all members
app.get('/api/members', (request, response) => response.json(members));

// static folder
// app.get('/', (request, response) => {
//     response.send(path.join(__dirname, 'public', 'index.html'));
// });

// set static folder / server
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));