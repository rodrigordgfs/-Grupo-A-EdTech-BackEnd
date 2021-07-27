const express = require("express");
const routes = express.Router();
const { celebrate, Joi, errors, Segments } = require("celebrate");
const Students = require("./controllers/students");

routes
  .post(
    "/v1/api-ed-tech/students",
    celebrate({
      [Segments.BODY]: Joi.object({
        name: Joi.string().max(100).required(),
        email: Joi.string().email().max(256).required(),
        ra: Joi.number().min(1).max(999999999).required(),
        cpf: Joi.string()
          .regex(/^\d{11}$/)
          .max(11)
          .required(),
      }),
    }),
    Students.create
  )
  .get("/v1/api-ed-tech/students", Students.getAll)
  .get("/v1/api-ed-tech/students/:id", Students.getByID)
  .patch(
    "/v1/api-ed-tech/students/:id",
    celebrate({
      [Segments.BODY]: Joi.object({
        name: Joi.string().max(100),
        email: Joi.string().email().max(256),
        active: Joi.boolean(),
      }),
    }),
    Students.update
  )
  .delete("/v1/api-ed-tech/students/:id", Students.delete);

module.exports = {
  routes,
  errors,
};
