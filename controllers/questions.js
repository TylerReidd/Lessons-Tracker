const Question = require('../models/question')


module.exports = {
    index
}




function index(req,res) {
    Question.find({}).then((question) => {
    res.render('questions/index', {title: 'Questions', user: req.user, questions: questions.reverse()})
})
  }

// function index(req,res ){
//     Question.find({}).then((questions) => {
//     res.render('questions/index', {title: 'Question Page', user: req.user, user})
// })
//   }
  
  




// function index (req,res) {
//   Question.find({})
//   .then((questions) => {
//      res.render('questions/index', {
//          title: "questions?",
//          user: req.user,
//          questions: questions.reverse()
//      })
//   })
// }