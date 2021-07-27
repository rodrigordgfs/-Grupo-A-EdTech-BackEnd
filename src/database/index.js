"use strict";

const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig);

const Students = require('../models/students')

Students.init(connection);

module.exports = connection;