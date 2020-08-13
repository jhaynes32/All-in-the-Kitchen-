console.log('Hello Jeremiah...')

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express(); 
const PORT = process.env.PORT || 3000;

// Database
const db = require('./models')

// Serve Public Directory
app.use(express.static(__dirname + '/public')) 
// Routes
const routes = require('./routes');

// BodyParser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// => __dirname gets us to the current place in files from wherever we are. Also used in res.sendFile.

app.use(session({
    secret: 'Shhhh secret',
    resave: false, // save session on every request
    saveUninitialized: false, //Only save session if session exists on req object.
}));

// ----------------------------ENDPOINTS-------------


// API Routes
app.use('/api/v1', routes.api);

// HTML Routes
app.use('/', routes.views);


// -------------------------START SERVER----------
app.listen(PORT, () => console.log(`Server starts on port ${PORT}`));