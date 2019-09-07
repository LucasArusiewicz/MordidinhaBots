const { Router } = require("express");
const { routeDeploy } = require("../../deploy");
const {
  sistema: { restart }
} = require("../controllers");

const routes = new Router();

routes.post("/restart", restart);
routes.post("/git", routeDeploy);

module.exports = routes;
