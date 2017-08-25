DROP TABLE IF EXISTS test2;

CREATE TABLE IF NOT EXISTS test2 (
  id SERIAL PRIMARY KEY,
  name TEXT,
  number INTEGER
);

INSERT INTO test2
(name, number)
VALUES
('you', 67);

INSERT INTO test2
(name, number)
VALUES
('are', 89);

INSERT INTO test2
(name, number)
VALUES
('cool', 90);