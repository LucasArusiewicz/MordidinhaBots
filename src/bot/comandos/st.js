const {
  botConfig: { admin }
} = require("../../config");
const { Logger } = require("../../utils/log");
let logger = new Logger("ST");

module.exports.run = async (bot, message, args) => {
  if (message.author.id == admin) {
    switch (args[0]) {
      case "online":
        bot.user.setStatus("online");
        logger.info("Online");
        break;
      case "idle":
        bot.user.setStatus("idle");
        logger.info("Idle");
        break;
      case "invisible":
        bot.user.setStatus("invisible");
        logger.info("Invisible");
        break;
      case "dnd":
        bot.user.setStatus("dnd");
        logger.info("dnd");
        break;

      default:
        message.channel.send(
          'Argumento inválido. "online","idle","invisible""dnd", '
        );
        break;
    }
  } else {
    message.channel.send("Sem permissão para executar esse comandos");
  }
};

module.exports.name = "st";
module.exports.help = "Altera a minha presença global.";
