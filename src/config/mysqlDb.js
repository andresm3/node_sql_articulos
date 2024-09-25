const { Sequelize, DataTypes } = require('sequelize');
const env = require('./environment');

const config = {
  host: env.db.host,
  username: env.db.username,
  password: env.db.password,
  database: env.db.name,
  timezone: env.db.timezone,
  dialect: env.db.dialect,
};
const database = new Sequelize(config);

module.exports = { database, DataTypes };
