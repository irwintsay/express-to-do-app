-- DROP DATABASE IF EXISTS express_mvc_todo_app;

-- CREATE DATABASE express_mvc_todo_app;

-- \c express_mvc_todo_app;

CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,
  subject VARCHAR(255),
  content TEXT
);
