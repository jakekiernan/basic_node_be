const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: 'string',
})

const User = mongoose.model('User', UserSchema);
