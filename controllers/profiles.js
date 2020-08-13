console.log('Here to create a profile');    
const db = require('../models');

const create = (req, res) => {
    // console.log(req.body);
    console.log('POST Profile Routes');
    db.User.create(req.body, (err, newUser) => {
        if (err) return res.status(500).json({ error: 'Something went wrong please try again' });

        res.status(201).json({
            status:201,
            data: newUser,
        });
    });
};

const show = (req, res) => {
    console.log('received request at Profile Route');
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return res.status(500).json(err)
        res.json({
            status: 200,
            data: foundUser,
        });
    });
}


// Index Profiles
const index = (req, res) => {
    db.User.find({}, (err, allProfiles) => {
      if (err) res.status(500).json({ status: 500, error: 'Something went wrong please try again' });
  
      res.json({
        status: 200,
        data: allProfiles,
      });
    });
  };



// Delete Profile  
const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedProfile) => {
      if (err) res.status(500).json({ status: 500, error: 'Something went wrong please try again' });
  
      res.status(200).json({ status: 200, data: deletedProfile })
    });
  }


module.exports = {
    create,
    show,
    index,
    destroy,
}; 