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

  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { description, completed } = req.body;
      const task = await Task.findByIdAndUpdate(id, { description, completed }, { new: true, runValidators: true });
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error updating task', error });
    }
  });

  return router;
};