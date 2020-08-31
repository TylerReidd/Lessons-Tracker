const mongoose = require('mongoose');
const Schema = mongoose.Schema


const goalSchema = new Schema({
  goal: String,
  daysPracticed: String,
  challenges: String,
  startDate: Date,
  dueDate: Date,
  completed: Boolean
})


const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  age: Number,
  instrument: String,
  level: String,
  goals: [goalSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);