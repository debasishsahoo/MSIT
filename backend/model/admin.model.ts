const mongoose = require('mongoose');

let UserSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamp: true }
);

module.exports = mongoose.model('UserTable', UserSchema);
