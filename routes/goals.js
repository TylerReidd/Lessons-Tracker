const router = require('express').Router();
const goalsCtrl = require('../controllers/goals');

//post a goal
router.post('/goals', isLoggedIn, goalsCtrl.create)
//delete a goal
router.delete('/users/goals/:id', isLoggedIn, goalsCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
