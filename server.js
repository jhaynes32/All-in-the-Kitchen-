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

// => can the syntax above be changed?
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
// app.get('/', (req, res) => {
//     res.sendFile('public/index.html', {
//         root: __dirname,
//     });
// });

// app.get('/api/v1/views/auth/login', (req, res) => {
//     res.sendFile('views/auth/login.html', {
//         root:__dirname,
//     });
// });




// -------------------------START SERVER----------
app.listen(PORT, () => console.log(`Server starts on port ${PORT}`));