const Question = require('../models/question')


module.exports = {
    index
}


function index (req,res) {
  Question.find({})
  .then((questions) => {
     res.render('questions/index', {
         title: "questions?",
         user: req.user,
         questions: questions.reverse()
     })
  })
}