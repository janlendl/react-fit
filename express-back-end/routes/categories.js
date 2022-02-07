// This will query all from categories

const router = require("express").Router();

module.exports = db => {
  router.get("/categories", (req, res) => {
    db.query(`SELECT * FROM categories`)
      .then(({ rows: categories }) => {
      res.json(categories);
    });
  });

  return router;
};
