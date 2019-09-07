const express = require("express");
const { raiz, bot, sistema } = require("./routes");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const { Logger } = require("../utils/log");
let logger = new Logger("APP", "app");

function customMorgan() {
  morgan.token("dateNow", function(req, res) {
    return logger._dateNow();
  });

  return morgan(
    ":dateNow [:method :status] - [APP]: :url :remote-addr :response-time[0] ms"
  );
}

class App {
  constructor() {
    logger.info("Criando Servidor.");
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    logger.verbose("Carregando middlewares.");
    this.server.use(customMorgan());
    this.server.use(express.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    logger.verbose("Carregando Rotas.");

    // Rotas Raiz
    this.server.use("/", raiz);

    // Rotas Bot
    this.server.use("/bot", bot);

    // Rotas Sistema
    this.server.use("/sistema", sistema);
  }
}

module.exports = new App().server;
