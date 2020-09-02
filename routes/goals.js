const router = require('express').Router();
const goalsCtrl = require('../controllers/goals');


router.post('/goals', isLoggedIn, goalsCtrl.create)
router.delete('/users/goals/:id', isLoggedIn, goalsCtrl.delete)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;
