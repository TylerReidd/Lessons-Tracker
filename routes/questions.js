const router = require('express').Router()
const questionsCtrl = require('../controllers/questions')



router.get('/questions/index', isLoggedIn, questionsCtrl.index)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }


  module.exports = router