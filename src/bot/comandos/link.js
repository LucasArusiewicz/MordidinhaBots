const {
  apiConfig: { base_url },
  botConfig: { timeMessage }
} = require("../../config");
const { getPropsDefaultEmbed } = require("../bot");
const { Logger } = require("../../utils/log");
let logger = new Logger("LINK", "bot");

module.exports.run = async (bot, message, args) => {
  try {
    let msgEnviada = await message.channel.send({
      embed: {
        fields: [
          {
            name: "Sitezinho:",
            value: base_url
          }
        ],
        ...getPropsDefaultEmbed()
      }
    });

    let author = message.author.username;
    logger.verbose(`Removendo comando do Usuário ${author}`);
    message
      .delete()
      .then(() => logger.info(`Removido comando do Usuário ${author}`));

    setTimeout(() => {
      let channel = msgEnviada.channel.name;
      logger.verbose(`Removendo mensagem do canal ${channel}`);
      msgEnviada
        .delete()
        .then(() => logger.info(`Removida mensagem do canal ${channel}`))
        .catch(err => logger.error(err));
    }, timeMessage);
  } catch (error) {
    logger.error(error.stack);
  }
};

module.exports.name = "link";
module.exports.help = "Te mostro o meu site.";
