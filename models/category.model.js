const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  section: { type: String, required: true },
  charts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'chart' }],
});

module.exports = mongoose.model('category', categorySchema);