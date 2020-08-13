const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// Below are all the view routes.




// ----------------------------------- PROFILES --------------------------------------

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
router.get('/logout', (req, res) => {
    res.sendFile('views/index.html', {
        root: `${__dirname}/../`
    });
});

//GET User Profile
router.get('/profile/:id', (req, res) => {
    res.sendFile('views/profile/show.html', {
        root: `${__dirname}/../`
    })
});


// GET Edit profile
router.get('/profile/edit/:id', (req, res) => {
    res.sendFile('views/profile/editProfile.html', {
        root:  `${__dirname}/../`
    })
    // res.redirect('http://localhost3000/profile-index');
})



//GET All profiles Index
router.get('/profile-index', (req, res) => {
    res.sendFile('/views/indexProfiles.html', {
        root: `${__dirname}/../`
    });
});



// -------------------------------------------- RECIPES -------------------------------------

//GET Recipe page
router.get('/recipe', (req, res) => {
    res.sendFile('views/recipes/recipe.html', {
        root: `${__dirname}/../`
    });
});

// GET Recipe 
router.get('/recipe/:id', (req, res) => {
    res.sendFile('views/recipes/recipe.html', {
        root: `${__dirname}/../`
    });
});

//GET Create Post page
router.get('/post', (req, res) => {
    res.sendFile('views/createPost.html', {
        root: `${__dirname}/../`
    });
});


//GET All recipe Index
router.get('/recipe-index', (req, res) => {
    res.sendFile('/views/recipes/indexRecipes.html', {
        root: `${__dirname}/../`
    });
});

// GET Edit profile
router.get('/recipe/edit/:id', (req, res) => {
    res.sendFile('views/recipes/edit.html', {
        root:  `${__dirname}/../`
    })
    // res.redirect('http://localhost3000/profile-index');
})

module.exports = router;
























// const update =  (req, res) => {
//   let UserId = req.params.id;
//   let updateUser = req.body;

//   db.Ingredient.findOneAndUpdate(
//       { _id: UserId }, // search condition
//       updateUser, // new content you want to update
//       {new:true}, // you want to receive the new object
//       (err, updateUser) => { // callback
//       if(err) { return console.log(err) }
//       res.json(updateUser);
//   });
// };