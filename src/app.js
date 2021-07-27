"use strict";

const express = require("express");
const cors = require("cors");

const { routes, errors } = require("./routes");

const app = express();

const AlreadyExists = require("./errors/AlreadyExists");
const NotFound = require("./errors/NotFound");
const Deativated = require("./errors/Deactivated");
const InvalidArgument = require("./errors/InvalidArgument");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,CREATE,PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  app.use(cors());
  next();
});
app.use(routes);
app.use(errors());

app.use((error, req, res, next) => {
  if (error instanceof AlreadyExists) {
    res.status(409);
  } else if (error instanceof NotFound || error instanceof InvalidArgument) {
    res.status(404);
  } else if (error instanceof Deativated) {
    res.status(400);
  } else {
    res.status(400);
  }
  res.send({ message: error.message });
});

module.exports = app;
