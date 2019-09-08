const { Router } = require("express");
const {
  bot: { avatar, status }
} = require("../controllers");

const routes = new Router();

routes.get("/status", status);
routes.get("/avatar", avatar);

module.exports = routes;
