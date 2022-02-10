// this will query all the exercises based on the workout name
const router = require("express").Router();

module.exports = db => {
  router.get("/workouts", (req, res) => {
    db.query(`
    SELECT exercises.id as exercise_id, workout_name, created_date, exercise_name, gifUrl, equipment, number_of_sets, number_of_reps
    FROM exercises
    LEFT JOIN exercise_workouts ON exercise_id = exercises.id
    JOIN workouts ON workout_id = workouts.id
    ORDER BY exercises.id
    `)
      .then(({ rows: workouts }) => {
      res.json(workouts);
    });
  });

  return router;
};