const { botConfig } = require("../../config");
const { getPropsDefaultEmbed } = require("../bot");

module.exports.run = async (bot, message, args) => {
  if (message.author.id == botConfig.admin) {
    let servers = bot.guilds.array();
    let servidores = [];

    for (const key in servers) {
      if (servers.hasOwnProperty(key)) {
        const element = servers[key];
        servidores.push(element.name);
      }
    }
    message.author.send({
      embed: {
        fields: [
          {
            name: "Total de Servidores:",
            value: servidores.join("\n")
          }
        ],
        ...getPropsDefaultEmbed()
      }
    });
    message.delete();
    return;
  } else {
    message.channel.send("Sem permissão para executar esse comandos");
  }
};

module.exports.name = "servidores";
module.exports.help = "Lista sevidores que faço parte.";
