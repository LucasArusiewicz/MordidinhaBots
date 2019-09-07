const { Router } = require("express");
const {
  bot: { status }
} = require("../controllers");

const routes = new Router();

routes.get("/", status);

module.exports = routes;
