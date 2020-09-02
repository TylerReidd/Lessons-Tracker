const User = require('../models/user');
// const Goal = require('../models/goal')

module.exports = {
  index,
  showGoalsPage, 
  createGoalsPage,
  questionsPage
};

function questionsPage(req,res){
  res.render('users/questions', {user: req.question, questions})
}



//Render page with input forms to create a goal
function createGoalsPage(req,res) {
  res.render('users/new')
}

//Create page with a list of goals 
function showGoalsPage(req,res) {
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