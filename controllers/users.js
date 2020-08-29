const User = require('../models/user');

module.exports = {
  index,
  showProfile
};

function showProfile(req,res) {
  User.findById(req.user.id)
  .then((user) => {
    res.render('users/profile', {title: "Profile Page", user })
  })
}

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { user: req.user, users })
  })
}