'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "quenquai",
  database: "qlphim",
});
module.exports = db