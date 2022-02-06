-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS workouts CASCADE;
CREATE TABLE workouts (
  id SERIAL PRIMARY KEY NOT NULL,
  workout_name VARCHAR(255) NOT NULL,
  created_date DATE NOT NULL
);