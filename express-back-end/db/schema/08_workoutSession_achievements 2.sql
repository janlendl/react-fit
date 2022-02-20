DROP TABLE IF EXISTS workoutSession_achievements CASCADE;
CREATE TABLE workoutSession_achievements (
  id SERIAL PRIMARY KEY NOT NULL,
  completed_days INT NOT NULL,
  achievement_id INT REFERENCES achievements(id) ON DELETE CASCADE,
  total_time INT
);