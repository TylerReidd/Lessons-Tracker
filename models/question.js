const mongoose = require('mongoose')
const Schema = mongoose.Schema


const replySchema = new Schema({
    postedBy: String,
    response: String
})



const questionSchema = new Schema ({
    askedBy: String,
    question: String,
    reply: [replySchema]
})

module.exports = mongoose.model('Question', questionSchema)