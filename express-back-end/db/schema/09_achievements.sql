-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS achievements CASCADE;
CREATE TABLE achievements (
  id SERIAL PRIMARY KEY NOT NULL,
  bronze INT NOT NULL,
  silver INT NOT NULL,
  gold INT NOT NULL,
  platinum INT NOT NULL,
  diamond INT NOT NULL,
  ruby INT NOT NULL
);