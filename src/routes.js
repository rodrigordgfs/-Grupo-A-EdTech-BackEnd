const express = require("express");
const {celebrate, Joi, errors, Segments} = require("celebrate");
const routes = express.Router();
const Students = require("./controllers/students");
const Authorize = require("./controllers/authorize");
const AuthMiddleware = require("./middlewares/auth");

routes.get("/", async (req, res, next) => {
  try {
    res.send({
      uptime : process.uptime(),
      message : "OK",
      timestamp : new Date(Date.now()).toISOString(),
    });
  } catch (e) {
    res.status(503).send();
  }
});

routes.post("/v1/api-ed-tech/authorize", celebrate({
              [Segments.BODY] : Joi.object({
                username : Joi.string().max(50).required(),
                password : Joi.string().max(50).required(),
              }),
            }),
            Authorize.create);

routes
    .post("/v1/api-ed-tech/students", AuthMiddleware.token, celebrate({
            [Segments.BODY] : Joi.object({
              name : Joi.string().max(100).required(),
              email : Joi.string().email().max(256).required(),
              ra : Joi.number().min(1).max(999999999).required(),
              cpf : Joi.string().regex(/^\d{11}$/).max(11).required(),
            }),
          }),
          Students.create)
    .get("/v1/api-ed-tech/students", AuthMiddleware.token, Students.getAll)
    .get("/v1/api-ed-tech/students/:id", AuthMiddleware.token, Students.getByID)
    .patch("/v1/api-ed-tech/students/:id", AuthMiddleware.token, celebrate({
             [Segments.BODY] : Joi.object({
               name : Joi.string().max(100),
               email : Joi.string().email().max(256),
               active : Joi.boolean(),
             }),
           }),
           Students.update)
    .delete("/v1/api-ed-tech/students/:id", AuthMiddleware.token,
            Students.delete);

module.exports = {
  routes,
  errors,
};
