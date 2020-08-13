const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------------------------- AUTH -------------------------- //

// router.post('/signup', ctrl.auth.createUser);
// router.post('/login', ctrl.auth.createSession);
// router.delete('/logout', ctrl.auth.deleteSession);
// router.get('/verify', ctrl.auth.verifyAuth);



//--------------------------PROFILE------------------//
// Below "router." is used because were routing the server to our routes api folder (this folder) which, for data, brings the server to our controllers functions in conrollers/profiles.js. Since our create function corresponds to a post method, the data is submitted to a specified source -- our mongo database.


// POST Create Profile
router.post('/profiles', ctrl.profiles.create);

// GET Profile
router.get('/profiles/:id', ctrl.profiles.show);


// GET Login 
router.get('/profiles', ctrl.profiles.show);


// GET Index All Profiles
router.get('/profiles', ctrl.profiles.index);


// DELETE Profile
router.delete('/profiles/:id', ctrl.profiles.destroy);








// router.get('/profiles/:id', ctrl.auth.login.html);

// router.post('/signup', ctrl.auth.signup.html);

// router.get('/profiles/:id', ctrl.profiles.show);

// router.get('/profiles', ctrl.profiles.index);

// router.delete('/profiles/:id', ctrl.profiles.destroy);

module.exports = router;