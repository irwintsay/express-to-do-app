const controller = {};

const test = {
  id: 1,
  subject: 'Do your homework',
  content: 'blahblahblah'
};

controller.index = (req, res) => {
  res.render('tasks/index', test);
};

module.exports = controller;