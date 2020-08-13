const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({
    Title: String,
    Text: String,
    Image: String,
    Author: [{
        type: Schema.type.ObjectId,
        ref: 'User',
    }]
});

const CommentSchema = new Schema ({
    Text: String, 
    Author: [{
        type: Schema.type.ObjectId,
        ref: 'User',
    }]
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Recipe;
module.exports = Comment;