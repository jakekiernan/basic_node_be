const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  addUser: (req, res) => {
    let user = new User(req.body);
    user.save((err, user) => {
      if (err) {
        console.log(err)
      }
      else {
        return res.json(user);
      }
    })
  },
  getUser: (req, res) => {
    User.findOne({_id: req.params.id}, (err, current_user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      } else {
        return res.json(current_user);
      }
    })
  },
  getAllUsers: (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      } else {
        return res.json(users);
      }
    })
  },
}