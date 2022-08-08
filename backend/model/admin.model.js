const mongoose = require('mongoose');

let AdminSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: String, default: true }
  },
  { timestamp: true }
);

module.exports = mongoose.model('AdminTable', AdminSchema);
