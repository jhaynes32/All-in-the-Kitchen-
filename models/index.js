const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/recipeApp';

mongoose.connect(DB_URL, {
    userNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

.then(() => console.log('MongoDB connnected...'))
.catch((err) => console.log(err));

module.exports = {
    User: require('./User'),
};

// the above .then is just a promise that gives mongo a method to do right after the time it takes to set up. Any files outside of this would run prior to the .connect method finishing, because mongodb is asynchronous. 

