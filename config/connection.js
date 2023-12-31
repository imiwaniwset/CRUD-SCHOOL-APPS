const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "schoolApps",
  password: "",
  port: 5432,
});

module.exports = pool;
