DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  age INTEGER,
  email TEXT
);

INSERT INTO users
(name, age, email)
VALUES
('Sally', 34, 'cool@cool.com'),
('Harry', 23, 'awesome@awesome.com'),
('Jane', 22, 'something@something.com'),
('Danny', 34, 'my@babe.com');