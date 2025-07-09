const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://bloguser:BLOgu3r@tamim.nlmyb.mongodb.net/distraction-pad?retryWrites=true&w=majority&appName=tamim', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const Note = require('./models/notes');
const Task = require('./models/tasks');
const Event = require('./models/events');

app.use('/api/notes', require('./routes/notes')(Note));
app.use('/api/tasks', require('./routes/tasks')(Task));
app.use('/api/events', require('./routes/events')(Event));
app.use('/api/users', require('./routes/users'));

app.get('/api/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error });
  }
});

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});

//Database pull request