const db = require('../models')


const create = (req, res) => {
    db.Recipe.create(req.body, (err, newRecipe) => {
        if (err) return res.status(500).json({ error: 'Something went wrong please try again' });

        res.status(201).json({
            status:201,
            data: newRecipe,
        });
    });
}


const show = (req, res) => {
    db.Recipe.findById(req.params.id, (err, foundRecipe) => {
        if (err) return res.status(500).json(err)
        res.json({
            status: 200,
            data: foundRecipe,
        });
    });
}

const index = (req, res) => {
    db.Recipe.find({}, (err, allRecipes) => {
        if (err) res.status(500).json({ status: 500, error: 'Something went wrong please try again' });

        res.json({
            status: 200, 
            data: allRecipes,
        });
    });
};


// Update Recipe
const update = (req, res) => {
    db.Recipes.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedRecipe) => {
      if (err) res.status(500).json({ status: 500, error: 'Something went wrong please try again'});
      res.status(200).json({ status:200, data: updatedRecipe})
    })
  }

 
  // Delete Recipe 
const destroy = (req, res) => {
    db.Recipes.findByIdAndDelete(req.params.id, (err, deletedRecipe) => {
      if (err) res.status(500).json({ status: 500, error: 'Something went wrong please try again' });
  
      res.status(200).json({ status: 200, data: deletedRecipe })
    });
  }
  



module.exports = {
    create,
    show,
    index,
    destroy,
    update,
}