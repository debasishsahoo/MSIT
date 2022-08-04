const mongoose = require('mongoose');

let UserSchema = mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamp: true }
);

module.exports = mongoose.model('UserTable', UserSchema);
