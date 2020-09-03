const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const { route } = require('./goals');
const users = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);
//display a page of goals
router.get('/users/goals', isLoggedIn, usersCtrl.showGoalsPage)
//page to create a new goal
router.get('/users/new', isLoggedIn, usersCtrl.createGoalsPage)

router.get('/users/questions', isLoggedIn, usersCtrl.questionsIndex)

router.post('/users/questions',isLoggedIn,usersCtrl.createQuestion)

router.delete('/users/questions/:id', isLoggedIn, usersCtrl.deleteQuestion)

// router.get('/users/replies/:id', isLoggedIn, usersCtrl.replyPage)




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
