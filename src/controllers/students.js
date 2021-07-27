"use strict";

const Students = require("../views/students");

exports.create = async (req, res, next) => {
  try {
    const { body } = req;
    const result = await Students.create(body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const { perPage, page, orderBy, order } = req.query;
    const result = await Students.getAll(perPage, page, orderBy, order);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Students.getByID(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Students.update(id, body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Students.delete(id);
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
