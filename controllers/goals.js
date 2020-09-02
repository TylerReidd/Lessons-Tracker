// const Goal = require('../models/goal')
const User = require('../models/user')


module.exports = {
    create,
   delete: deleteGoals
}

function deleteGoals(req,res) {
    let idx = req.user.goals.findIndex( (g) => {req.params.id})
 req.user.goals.splice(idx, 1)
 req.user.save().then(() => {
    res.redirect('/users/goals')
 })
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