const express = require('express');
const router = express.Router();

module.exports = (Note) => {
  router.get('/', async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching notes', error });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const { userId, date, content } = req.body;
      const note = new Note({ userId, date: new Date(date), content });
      await note.save();
      res.status(201).json(note);
    } catch (error) {
      res.status(500).json({ message: 'Error saving note', error });
    }
  });

  return router;
};