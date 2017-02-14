const Task        = require('../../models/task')
const controller  = {};

controller.index = (req, res) => {
  Task
  .findAll()
  .then(tasks => {
    res.render('tasks/index', {
      tasks: tasks
    });
  });
};

controller.show = (req, res) => {
  Task
  .findById(req.params.id)
  .then(task => {
    console.log(task);
    res.render('tasks/show', {
      task: task[0]
    });
  });
};

controller.new = (req, res) => {
  res.render('tasks/new');
};

controller.create = (req, res) => {
  console.log(req.body);
  Task
  .save(req.body.task)
  .then(task => {
    console.log(task);
    res.redirect(`/tasks/${task[0].id}`);
  });
};

module.exports = controller;
