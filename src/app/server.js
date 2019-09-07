const { appConfig } = require("../config");
const { Logger } = require("../utils/log");
let logger = new Logger("APP", "app");

const app = require("./app");

app.listen(appConfig.port);
logger.info("Servidor Criado !");
logger.info(`${appConfig.base_url}:${appConfig.port}`);

module.exports = {
  app
};
