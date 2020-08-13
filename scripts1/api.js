const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// ----------------------------- AUTH -------------------------- //

// router.post('/login', ctrl.auth.createUser);
// router.post('/login', ctrl.auth.createSession);
// router.delete('/logout', ctrl.auth.deleteSession);
// router.get('/verify', ctrl.auth.verifyAuth);



//--------------------------PROFILE------------------//
// Below "router." is used because were routing the server to our routes api folder (this folder) which, for data, brings the server to our controllers functions in conrollers/profiles.js. Since our create function corresponds to a post method, the data is submitted to a specified source -- our mongo database.


// POST Create Profile
router.post('/profile/:id', ctrl.profiles.create);

// GET User Profile
router.get('/profiles/:id', ctrl.profiles.show);


// POST Login
router.post('/login', ctrl.login.showUser)

// GET Index All Profiles
router.get('/profiles-index', ctrl.profiles.index);

// DELETE Profile
router.delete('/profiles/:id', ctrl.profiles.destroy);

// Update Profile
router.put('/profiles/edit/:id', ctrl.profiles.update);




// ------------------------RECIPES---------------------//

// Create Recipes
router.post('/post', ctrl.recipes.create);

// Show Recipes
router.get('/recipe/:id', ctrl.recipes.show);

// GET Index All Recipes
router.get('/recipe-index', ctrl.recipes.index);


// DELETE Recipes
router.delete('/recipe/:id', ctrl.profiles.destroy);

// Update Profile
router.put('/recipe/edit/:id', ctrl.profiles.update);



module.exports = router;














// router.get('/profiles/:id', ctrl.auth.login.html);

// router.post('/signup', ctrl.auth.signup.html);

// router.get('/profiles/:id', ctrl.profiles.show);

// router.get('/profiles', ctrl.profiles.index);

// router.delete('/profiles/:id', ctrl.profiles.destroy);
