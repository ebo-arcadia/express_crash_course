const express = require('express');
const path = require('path')
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();

// init middleware
// app.use(logger);

// handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// static folder
// app.get('/', (request, response) => {
//     response.send(path.join(__dirname, 'public', 'index.html'));
// });

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// set static folder / server
app.use(express.static(path.join(__dirname, 'public')));

// home page route
app.get('/', (req, res) => res.render('index', {
    title: 'memebr app',
    members
})
);

// members API routes 
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));