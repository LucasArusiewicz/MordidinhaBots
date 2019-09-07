const { Router } = require("express");
const {
  raiz: { main }
} = require("../controllers");

const routes = new Router();

routes.get("/", main);

module.exports = routes;
