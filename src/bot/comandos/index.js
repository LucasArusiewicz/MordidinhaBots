const fs = require("fs");
const { Logger } = require("../../utils/log");
const {
  botConfig: { prefixCmd }
} = require("../../config");

let logger = new Logger("CMD", "bot");
let comandos = new Map();
let helpers = [];

fs.readdir(__dirname, (err, files) => {
  if (err) logger.error(err);

  let cmdsFiles = files.filter(
    f => f.split(".").pop() == "js" && !f.startsWith("index")
  );

  if (cmdsFiles.length == 0) logger.warning("Nenhum comando foi carregado!");

  logger.verbose(`Carregando comandos.`);
  let countCmd = 1;
  cmdsFiles.map(file => {
    const { name, run, help } = require(`./${file}`);
    helpers.push(`${name}: ${help}`);
    comandos.set(name, run);
    logger.verbose(`${countCmd}: ${prefixCmd}${name} carregado`);
    countCmd++;
  });
});

module.exports = {
  Comandos: comandos,
  Helpers: helpers
};
