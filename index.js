const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('<h1>Welcome to Express!</h1>')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));