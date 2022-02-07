// require('dotenv').config({ debug: true });

// const { Client } = require('pg');

// const client = new Client({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });

// client
//   .connect()
//   .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

// module.exports = client;

const pg = require("pg");
console.log('ENV::::',process.env);
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || "",
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;