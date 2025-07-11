const express = require('express');
const router = express.Router();

module.exports = (Event) => {
  router.get('/', async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching events', error });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const { userId, date, title, time } = req.body;
      const event = new Event({ userId, date: new Date(date), title, time });
      await event.save();
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ message: 'Error saving event', error });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { title, time } = req.body;
      const event = await Event.findByIdAndUpdate(id, { title, time }, { new: true, runValidators: true });
      if (!event) return res.status(404).json({ message: 'Event not found' });
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: 'Error updating event', error });
    }
  });

  return router;
};