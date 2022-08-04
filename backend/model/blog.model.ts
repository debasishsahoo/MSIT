const mongoose = require('mongoose');

let BolgSchema = mongoose.Schema(
  {
    id: { type: String },
    title: { type: String, required: true },
    body: { type: String, required: true },
    image: { type: String, required: true },
    autherid: { type: String, required: true },
    auther: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamp: true }
);

module.exports = mongoose.model('BlogTable', BolgSchema);
