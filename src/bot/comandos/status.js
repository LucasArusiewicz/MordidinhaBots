const { getPropsDefaultEmbed } = require("../bot");

module.exports.run = async (bot, message, args) => {
  message.channel.send({
    embed: {
      fields: [
        {
          name: "Total de Canais:",
          value: bot.channels.size
        },
        {
          name: "Total de Servidores:",
          value: bot.guilds.size
        },
        {
          name: "Total de Usuários:",
          value: bot.users.size
        }
      ],
      ...getPropsDefaultEmbed()
    }
  });
  return;
};

module.exports.name = "status";
module.exports.help = "Te mostro informações inúteis.";
