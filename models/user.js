const sequelize = require("sequelize");
const Sequelize = require("../util/db");

const user = Sequelize.define("user", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  first_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: sequelize.STRING,
    allowNull: false,
  },
  company: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

module.exports = user;
