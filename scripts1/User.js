const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    email: String,
    password: String,
    image: String,
    signupDate: {
        type: Date, 
        default: Date.now,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

//any method that comes after db.'model-name' is a method that comes from .model above. We use these in js files and auth files. 