// const Goal = require('../models/goal')
const User = require('../models/user')
const users = require('./users')

module.exports = {
    create
}

function create(req,res){
    req.user.goals.push(req.body)
    req.user.save().then(() => {
        console.log(req.user)
        res.render('users/goals', {
            user: req.user,
            goals:req.body
            
        })
    })
}




// function create(req,res){
//     User.findById(req.params.id, function(err, user) {
//         console.log(req.params.id)
// //         user.goals.push(req.body)
// //         user.save(function(err) {
// //             console.log(user)
// //             res.redirect(`/users/${user._id}`)
// //         })
//     })
//  }