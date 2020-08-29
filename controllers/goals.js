// const Goal = require('../models/goal')
const User = require('../models/user')

module.exports = {
    create
}


function create(req,res){
    User.findById(req.params.id, function(err, user) {
        user.goals.push(req.body)
        user.save(function(err) {
            console.log(user)
            res.redirect(`/users/${user._id}`)
        })
    })
}