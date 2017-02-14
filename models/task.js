const db      = require('../config/database');
const Task    = {};

Task.findAll = () => {
  return db.query('SELECT * FROM tasks');
};

Task.findById = (id) => {
  return db.query('SELECT * FROM tasks WHERE id = $1', [id]);
};

Task.save = (task) => {
  return db.query('INSERT INTO tasks (subject, content) VALUES ($1, $2) RETURNING id', [task.subject, task.content]);
};

// Task.update = (task) => {

// };

// Task.destroy = (task) => {

// };

module.exports = Task;
