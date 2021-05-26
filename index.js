const express = require('express');
const path = require('path')

const app = express();

const members = [
    {
        id: 1,
        name: 'Jay Choi',
        email: 'jay@email.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Neo Anderson',
        email: 'neo@email.com',
        status: 'inactive'
    }
];

// create routes to get all members
app.get('/api/members', (request, response) => {response.json(members);})

// static folder
// app.get('/', (request, response) => {
//     response.send(path.join(__dirname, 'public', 'index.html'));
// });

// set static folder / server
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));