const router = require('express').Router();
const usersCtrl = require('../controllers/users');
// const users = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);
router.get('/users/goals', isLoggedIn, usersCtrl.showGoalsPage)
router.get('/users/new', isLoggedIn, usersCtrl.createGoalsPage)
router.post('/users/goals', isLoggedIn, usersCtrl.createGoal)




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
