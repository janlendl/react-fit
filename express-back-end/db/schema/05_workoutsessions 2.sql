DROP TABLE IF EXISTS workoutSessions CASCADE;
CREATE TABLE workoutSessions (
  id SERIAL PRIMARY KEY NOT NULL,
  completed_on DATE NOT NULL,
  duration INT NOT NULL,
  comment VARCHAR(255),
  workout_id INT REFERENCES workouts(id) ON DELETE CASCADE
);
