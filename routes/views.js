const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// Below are all the view routes.


//GET home
router.get('/', (req, res) => {
    res.sendFile('views/index.html', {
        root: `${__dirname}/../`
    });
});
   
// GET Signup 
router.get('/signup', (req, res) => {
    res.sendFile('views/auth/signup.html', {
        root: `${__dirname}/../`
    });
});

// GET Login
router.get('/login', (req, res) => {
    res.sendFile('views/auth/login.html', {
        root: `${__dirname}/../`
    });
});

//GET logout
router.delete('/logout', (req, res) => {
    res.sendFile('views/auth/logout.html', {
        root: `${__dirname}/../`
    });
});

//GET User Profile
router.get('/profile', (req, res) => {
    res.sendFile('views/profile/show.html', {
        root: `${__dirname}/../`
    });
});

//GET Recipe page
router.get('/recipe', (req, res) => {
    res.sendFile('views/recipe.html', {
        root: `${__dirname}/../`
    });
});

//GET Recipe 
// router.get('/recipe/:id', (req, res) => {
//     res.sendFile('views/recipe.html', {
//         root: `${__dirname}/../`
//     });
// });

//GET Create Post page
router.get('/post', (req, res) => {
    res.sendFile('views/createPost.html', {
        root: `${__dirname}/../`
    });
});

//GET All profiles Index
router.get('/profile-index', (req, res) => {
    res.sendFile('/views/indexProfiles.html', {
        root: `${__dirname}/../`
    });
});


module.exports = router;