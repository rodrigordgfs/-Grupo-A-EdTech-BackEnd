"use strict";

module.exports = {
  dialect: process.env.DIALECT_DB || "mysql",
  host: process.env.HOST_DB || "shinodalabs.com.br",
  database: process.env.DATABASE_DB || "db_ed_tech",
  username: process.env.USERNAME_DB || "ed_tech",
  password: process.env.PASSWORD_DB || "Ss14@D500",
  define: {
    timestamp: true,
    underscored: true,
  },
  timezone: process.env.TIMEZONE_DB || "-3:00",
};
