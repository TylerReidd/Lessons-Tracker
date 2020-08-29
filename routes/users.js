var router = require('express').Router();
var usersCtrl = require('../controllers/users');
// const users = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);
router.get('/users/goals', isLoggedIn, usersCtrl.showProfile)
// router.get('/users/goals', isLoggedIn, usersCtrl.goalsPage)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
