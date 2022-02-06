DROP TABLE IF EXISTS exercises CASCADE;
CREATE TABLE exercises (
  id SERIAL PRIMARY KEY NOT NULL,
  exercise_name VARCHAR(255) NOT NULL,
  gifUrl VARCHAR(255) NOT NULL,
  target_muscle VARCHAR(255) NOT NULL,
  equipment VARCHAR(255) NOT NULL,
  number_of_sets INT,
  number_of_reps INT,
  category_id INT REFERENCES categories(id) ON DELETE CASCADE
);
