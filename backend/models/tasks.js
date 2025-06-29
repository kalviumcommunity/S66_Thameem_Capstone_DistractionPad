const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true, trim: true },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);