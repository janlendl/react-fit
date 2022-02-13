const router = require("express").Router();

  router.put("/workouts/log/:id", (req, res) => {
    
    const {logWorkout} = req.body.logWorkout;

    db.query(`
    INSERT INTO workoutsessions (completed_on, duration, comment, workout_id) 
    VALUES ($1::date, $2::int, $3::varchar, $4::int);
      `, 
      [newWorkout]
    )
      .then(() => {
        setTimeout(() => {
          res.status(204).json({});
          console.log("New Workout Created!");
        }, 1000);
      })
      .catch(error => console.log('Error: ', error)); 
  });