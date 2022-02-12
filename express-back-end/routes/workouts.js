// this will query all the exercises based on the workout name
const router = require("express").Router();

module.exports = db => {
  router.get("/workouts", (req, res) => {
    db.query(`
    SELECT workouts.id AS workout_id, workout_name, created_date,
    CASE WHEN exercises.id IS NULL
    THEN NULL
    ELSE json_build_object('name', exercises.exercise_name, 'gifUrl', exercises.gifUrl, 'body_part', categories.category_name, 'equipment', exercises.equipment, 'target_muscle', exercises.target_muscle, 'number_of_sets', exercises.number_of_sets, 'number_of_reps', exercises.number_of_reps)
    END AS exercise
    FROM exercises
    LEFT JOIN exercise_workouts ON exercise_id = exercises.id
    JOIN workouts ON workout_id = workouts.id
    JOIN categories ON category_id = categories.id
    JOIN user_workouts ON user_workouts.workout_id = workouts.id
    JOIN users on user_workouts.user_id = users.id
    WHERE user_id = 1
    GROUP BY workouts.id, workout_name, exercises.id, category_name
    ORDER BY exercises.id;
    `)
      .then(({ rows: workouts }) => {
        const exerciseObj = {};
        workouts.forEach(workout => {
          if(exerciseObj[workout["workout_name"]]) {
            exerciseObj[workout["workout_name"]]["exercise"].push(workout.exercise)
          } else {
            const exercise = workout.exercise;
            const newWorkout = {};
            newWorkout["workout_id"] = workout["workout_id"]
            newWorkout["workout_name"] = workout["workout_name"]
            newWorkout["created_date"] = workout["created_date"]
            newWorkout["exercise"] = [{...exercise}]
            exerciseObj[workout["workout_name"]] = newWorkout
          }
        });
      res.json(Object.values(exerciseObj));
    });
  });

  return router;
};