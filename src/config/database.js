"use strict";

module.exports = {
  dialect: process.env.DIALECT_DB,
  host: process.env.HOST_DB,
  database: process.env.DATABASE_DB,
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  define: {
    timestamp: true,
    underscored: true,
  },
  timezone: process.env.TIMEZONE_DB,
};
