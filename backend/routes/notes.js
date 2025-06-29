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

  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { content } = req.body;
      const note = await Note.findByIdAndUpdate(id, { content }, { new: true, runValidators: true });
      if (!note) return res.status(404).json({ message: 'Note not found' });
      res.json(note);
    } catch (error) {
      res.status(500).json({ message: 'Error updating note', error });
    }
  });

  return router;
};