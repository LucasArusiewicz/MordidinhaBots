const { Logger } = require("./log");
let logger = new Logger();

function restartProcess(origem) {
  logger.info(`Reiniciando processo.`);
  if (origem) logger.verbose(origem);
  process.exit(1);
}

module.exports = {
  restartProcess
};
