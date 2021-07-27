"use strict";
const { Model, DataTypes } = require("sequelize");

class Students extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        ra: DataTypes.INTEGER,
        cpf: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "Students",
      }
    );
  }
}

module.exports = Students;
