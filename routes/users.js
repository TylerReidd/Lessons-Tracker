const router = require('express').Router();
const usersCtrl = require('../controllers/users');
// const users = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);
//display a page of goals
router.get('/users/goals', isLoggedIn, usersCtrl.showGoalsPage)
//page to create a new goal
router.get('/users/new', isLoggedIn, usersCtrl.createGoalsPage)

router.get('/users/questions', isLoggedIn, usersCtrl.questionsPage)






function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
