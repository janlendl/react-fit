// this will query all registered users

const router = require("express").Router();

module.exports = db => {
  router.get("/users", (req, res) => {
    db.query(`SELECT * FROM users`)
      .then(({ rows: users }) => {
      res.json(users);
    });
  });

  return router;
};