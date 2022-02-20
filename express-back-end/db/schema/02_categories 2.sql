DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  category_name VARCHAR(255) NOT NULL
);

  -- back VARCHAR(255),
  -- cardio VARCHAR(255),
  -- chest VARCHAR(255),
  -- lower_arms VARCHAR(255),
  -- lower_legs VARCHAR(255),
  -- neck VARCHAR(255),
  -- shoulders VARCHAR(255),
  -- upper_arms VARCHAR(255),
  -- upper_legs VARCHAR(255),
  -- waist VARCHAR(255)