const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  title: { type: String, required: true, trim: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);