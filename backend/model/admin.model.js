const mongoose = require('mongoose');

let AdminSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamp: true }
);

module.exports = mongoose.model('AdminTable', AdminSchema);
