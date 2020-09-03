const User = require('../models/user');
const Question = require('../models/question')
// const Goal = require('../models/goal')

module.exports = {
  index,
  showGoalsPage, 
  createGoalsPage,
  questionsPage,
  createQuestion
};

function createQuestion(req,res) {

  Question.create(
    { 
      askedBy: req.user.name, 
      question: req.body.question
    })
    
  Question.find({})
  .then((question) => {
      res.render('users/questions', {title: "question page", question})
  })
}

//ONLY TAKING YOU TO PAGE 
function questionsPage(req,res){
  Question.find({})
  .then((question) => {
    res.render('users/questions', {title: "Question page", question})
  })
}

//creates question 


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