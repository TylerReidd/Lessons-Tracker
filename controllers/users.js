const User = require('../models/user');
const Question = require('../models/question')
// const Goal = require('../models/goal')

module.exports = {
  index,
  showGoalsPage, 
  createGoalsPage,
  questionsIndex,
  createQuestion,
  deleteQuestion,
  // replyPage
};

// function replyPage(req,res) {
//   Question.findById(req.params.id)
//   .then((question) => {
//     res.render('users/replies', {
//       title: "Answer Questions",
//       user: req.user, question
//     })
//   })
// }


function deleteQuestion(req,res) {
  Question.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/users/questions')
  })
}
// )
// }

// let idx = req.user.questions.findIndex( (q) => {req.params.id})
// req.user.questions.splice(idx, 1)
// req.user.save().then(() => {
//   res.redirect('/users/questions')
function createQuestion(req,res) {
  req.body.askedBy = req.user.name
  Question.create(req.body)
  .then(() => {
    res.redirect('/users/questions')
  })
}
    



//ONLY TAKING YOU TO Index 
function questionsIndex(req,res){
  Question.find({})
  .then((question) => {
    res.render('users/questions', {title: "Question page", question})
  })
}

//creates question 


//Render Index with input forms to create a goal
function createGoalsPage(req,res) {
  res.render('users/new')
}

//Create Index with a list of goals 
function showGoalsPage(req,res) {
  User.findById(req.user.id)
  .then((user) => {
    res.render('users/goals', {title: "Profile page", user })
  })
}


function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { user: req.user, users })
  })
}