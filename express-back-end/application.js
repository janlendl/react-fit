const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db");

const categories = require("./routes/categories");
const exercises = require("./routes/exercises");
const users = require("./routes/users");

module.exports = function application( ENV/*, actions = { updateAppointment: () => {} } */) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use("/api", categories(db));
  app.use("/api", exercises(db));
  app.use("/api", users(db));
  // app.use("/api", appointments(db, actions.updateAppointment));

  // if (ENV === "development" || ENV === "test") {
  //   Promise.all([
  //     read(path.resolve(__dirname, `db/schema/create.sql`)),
  //     read(path.resolve(__dirname, `db/schema/${ENV}.sql`))
  //   ])
  //     .then(([create, seed]) => {
  //       app.get("/api/debug/reset", (request, response) => {
  //         db.query(create)
  //           .then(() => db.query(seed))
  //           .then(() => {
  //             console.log("Database Reset");
  //             response.status(200).send("Database Reset");
  //           });
  //       });
  //     })
  //     .catch(error => {
  //       console.log(`Error setting up the reset route: ${error}`);
  //     });
  // }

  app.close = function() {
    return db.end();
  };

  return app;
};
