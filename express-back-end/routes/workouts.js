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


  router.put("/createWorkout", (req, res) => {
    console.log('FROM FE', req.body);
    const newWorkout = req.body.workoutData;
    const workout_name = newWorkout.workoutName;
    const date = newWorkout.date;
    const sets = newWorkout.sets;
    const reps = newWorkout.reps;
    const exercise_name = newWorkout.exercises[0].name;
    const gif = newWorkout.exercises[0].gifUrl;
    const target = newWorkout.exercises[0].target;
    const equipment = newWorkout.exercises[0].equipment;
    const bodyPart = newWorkout.exercises[0].bodyPart;
    console.log('WORKOUT NAME:::', workout_name);
    db.query(`
      WITH new_workout as (
        INSERT INTO workouts (workout_name, created_date) VALUES ($1::varchar, $2::date)
        RETURNING id
      )
      ,new_exercise as (
        INSERT INTO exercises (exercise_name, gifUrl, target_muscle, equipment, number_of_sets, number_of_reps, category_id) VALUES ($3::varchar, $4::varchar, $5::varchar, $6::varchar, $7::int, $8::int, (SELECT id FROM categories WHERE category_name = $9::varchar))
        RETURNING id
      )
      ,new_user_workout as (
        INSERT INTO user_workouts (user_id, workout_id) VALUES (1, (SELECT id from new_workout))
      )
      INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES((SELECT id from new_exercise), (SELECT id from new_workout));
      `, 
      [workout_name, date, exercise_name, gif, target, equipment, sets, reps, bodyPart]
    )
      .then(() => {
        setTimeout(() => {
          res.status(204).json({});
          console.log("New Workout Created!");
        }, 1000);
      })
      .catch(error => console.log('Error: ', error)); 
  });

  router.delete("/workouts/:id", (req, res) => {
    
    const {workout} = req.body.workout;
    
    db.query(`
    WITH delete_exercise as (
      DELETE FROM exercises WHERE id = (SELECT exercise_id FROM exercise_workouts WHERE workout_id = $1::int) 
    )
    DELETE FROM workouts where workouts.id = $1::int; 
    `, [Number(req.params.id)]
    )
      .then(() => {
        setTimeout(() => {
          res.status(204).json({});
          console.log("Workout Deleted!");
        }, 1000);      
      })
      .catch(error => console.log('Error', error));
  })

  return router;
};