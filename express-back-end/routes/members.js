// this will query all registered users

const router = require("express").Router();

module.exports = db => {
  router.get("/members", (req, res) => {
    db.query(`SELECT * FROM users`)
      .then(({ rows: members }) => {
      res.json(members);
    });
  });

  return router;
};