const express = require('express');
const router = express.Router();

module.exports = (Task) => {
  router.get('/', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tasks', error });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const { userId, date, description, completed } = req.body;
      const task = new Task({ userId, date: new Date(date), description, completed });
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error saving task', error });
    }
  });

  return router;
};