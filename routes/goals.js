const router = require('express').Router()
const goalsCtrl = require('../controllers/goals');


router.get('/', isLoggedIn, goalsCtrl.index)

function isLoggedIn(req,res, next) {
    if(req.isAuthenticated()) return next()
    res.redirect('/auth/google')
}