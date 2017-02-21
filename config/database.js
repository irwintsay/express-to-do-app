// PSQL Database Connection

const pg          = require('pg-promise')();
const connection  = process.env.DATABASE_URL || 'postgres://localhost:5432/express_mvc_todo_app';
const db          = pg(connection);

module.exports = db;
