"use strict";

const jwt = require("jsonwebtoken");

exports.create = async (req, res, next) => {
  try {
    const { body } = req;
    const token = jwt.sign(
      {
        username: body.username,
        password: body.password,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
    return res.status(200).send({ token });
  } catch (error) {
    next(error);
  }
};
