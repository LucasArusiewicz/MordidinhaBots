const { Router } = require("express");
const { routeDeploy } = require("../../deploy");
const { Bot } = require("../../bot");

const routes = new Router();

routes.get("/", (req, res) => {
  let info = {
    canais: Bot.channels.size,
    servers: Bot.guilds.size,
    users: Bot.users.size
  };

  res.json(info);
});
routes.post("/git", routeDeploy);

module.exports = routes;
