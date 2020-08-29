const User = require('../models/user');
// const Goal = require('../models/goal')

module.exports = {
  index,
  showProfile, 
  goalsPage
};

//display all goals 


//creates a new goal


function goalsPage(req,res) {
  res.render('users/new')
}

//use this function as archetype create a users/goals page 
function showProfile(req,res) {
  User.findById(req.user.id)
  .then((user) => {
    res.render('users/goals', {title: "Profile Page", user })
  })
}


function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { user: req.user, users })
  })
}