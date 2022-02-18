const router = require("express").Router();

module.exports = db => {
  router.get("/exercises", (req, res) => {
    db.query(`SELECT * FROM exercises`)
      .then(({ rows: exercises }) => {
        res.json(exercises);
      });
  });

  // update exercise sets and reps
  router.post("/editExercise/", (req, res) => {
    console.log("Data passed from Front-End: ", req.body)
    const updateExercise = req.body.exerciseData;
    const sets = updateExercise.sets;
    const reps = updateExercise.reps;
    const id = updateExercise.id;

    db.query(`
      UPDATE exercises
      SET number_of_sets = $1, number_of_reps = $2
      WHERE exercises.id = $3;
      `, [sets, reps, id]
    )
      .then(() => {
        setTimeout(() => {
          res.status(204).json({});
          console.log("Exercise Reps and Sets Updated!");
        }, 1000);
      })
      .catch(error => console.log('Error', error.message));

  })

  return router;
};