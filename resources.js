const express     = require('express');
const router      = express.Router();

router.use('/tasks', require('./controllers/tasks'));

module.exports = router;