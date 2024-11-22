const { Client } = require ("pg");
const dotenv = require ("dotenv");
dotenv.config();

const connection = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

connection.connect();
module.exports = connection;
