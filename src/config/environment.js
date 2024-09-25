require('dotenv').config();

module.exports = {
  app: {
    port: process.env.APP_PORT,
  },
  
  db: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    timezone: process.env.DB_TIMEZONE,
    dialect: process.env.DB_DIALECT,
  },
};
