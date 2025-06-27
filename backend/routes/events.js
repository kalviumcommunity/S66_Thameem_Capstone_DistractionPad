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

  return router;
};