const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  res.status(200).json({ message: "oi", status: "ok" });
});

module.exports = routes;
