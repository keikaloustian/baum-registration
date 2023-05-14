const mysql = require("mysql2");

const connection = mysql.createConnection(
  `mysql://${process.env.PLANETSCALE_DB_USERNAME}:${process.env.PLANETSCALE_DB_PASSWORD}@${process.env.PLANETSCALE_DB_HOST}/${PLANETSCALE_DB}?ssl={"rejectUnauthorized":true}`
);
