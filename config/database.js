const pg          = require('pg-promise')();
const connection  = 'postgres://localhost:5432/express_mvc_todo_app';
const db          = pg(connection);

module.exports = db;