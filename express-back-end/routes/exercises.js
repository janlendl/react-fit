const router = require("express").Router();

module.exports = db => {
  router.get("/exercises", (req, res) => {
    db.query(`SELECT * FROM exercises`)
      .then(({ rows: exercises }) => {
      res.json(exercises);
    });
  });

  // update exercise sets and reps
  router.put("/editExercise/", (req, res) => {
    console.log("FE",req.body)
    // const {values, id} = req.body.exercise
    db.query(`
    UPDATE exercises
    SET number_of_sets = $1::int, number_of_reps = $2::int
    WHERE id = $3::int;
    `[sets, reps, id]
    )
    .then(() => {
      setTimeout(() => {
        res.status(204).json({res});
        console.log("Exercise Reps and Sets Updated!");
      }, 1000);      
    })
    .catch(error => console.log('Error', error));
  })

  return router;
};