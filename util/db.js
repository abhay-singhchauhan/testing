const sequelize = require("sequelize");

const Sequelize = new sequelize("test-project", "root", "Snjay@66", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = Sequelize;
