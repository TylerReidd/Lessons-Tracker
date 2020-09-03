const router = require('express').Router();
const questionsCtrl = require('../controllers/questions');



//router.post('/users/questions', isLoggedIn, questionsCtrl.create)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }



module.exports = router