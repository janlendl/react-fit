DROP TABLE IF EXISTS exercise_workouts CASCADE;
CREATE TABLE exercise_workouts (
  id SERIAL PRIMARY KEY NOT NULL,
  workout_id INT REFERENCES workouts(id) ON DELETE CASCADE,
  exercise_id INT REFERENCES exercises(id) ON DELETE CASCADE
);