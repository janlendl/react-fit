// this will query all exercises
const router = require("express").Router();

module.exports = db => {
  router.get("/exercises", (req, res) => {
    db.query(`SELECT * FROM exercises`)
      .then(({ rows: exercises }) => {
      res.json(exercises);
    });
  });

  return router;
};