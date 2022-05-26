const Sequelize = require("sequelize");
require("dotenv/config");
const sequelize = new Sequelize(
  "crudzeira",
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
