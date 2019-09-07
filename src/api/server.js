const {
  apiConfig: { base_url, port }
} = require("../config");
const { Logger } = require("../utils/log");
let logger = new Logger("API", "api");

const api = require("./api");

api.listen(appConfig.port);
logger.info("Servidor Criado !");
logger.info(`${base_url}:${port}`);

module.exports = {
  api
};
