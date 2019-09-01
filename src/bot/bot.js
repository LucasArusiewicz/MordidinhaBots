const Discord = require("discord.js");

const { Comandos, Helpers } = require("./comandos");
const { botConfig } = require("../config");

const { Logger } = require("../utils/log");
let logger = new Logger("BOT", "bot");

const clientDiscord = new Discord.Client();

logger.info("Criando Bot");

clientDiscord.on("ready", onReadyBot);
clientDiscord.on("message", onMessage);

clientDiscord.login(botConfig.token);

async function onReadyBot() {
  clientDiscord.user.setActivity(botConfig.status);
  logger.info(
    `Logado como ${clientDiscord.user.username}#${clientDiscord.user.discriminator}.`
  );
  logger.info(`Total de Canais: ${clientDiscord.channels.size}`);
  logger.info(`Total de Servidores: ${clientDiscord.guilds.size}`);
  logger.info(`Total de Usuários: ${clientDiscord.users.size}`);
  logger.info(
    `Invite: ${await Comandos.get("invite")(clientDiscord, null, [
      "metodo_string"
    ])}`
  );
}

async function onMessage(message) {
  const { content } = message;

  if (message.author.equals(clientDiscord.user)) return;
  if (!content.startsWith(botConfig.prefixCmd)) return;

  let mensagemArray = content.split(" ");
  let comando = mensagemArray[0].slice(botConfig.prefixCmd.length);
  let args = mensagemArray.slice(1);

  if (comando == "help") {
    sendMessageHelp(message);
    return;
  }

  let runCmd = Comandos.get(comando);

  if (runCmd) {
    logger.logCmd(message);
    logger.info(`${message.author.tag} ${content}`);
    runCmd(clientDiscord, message, args);
  } else {
    message.delete();
  }
}

function getFooterEmbed() {
  return {
    icon_url: clientDiscord.user.avatarURL,
    text: `${botConfig.prefixName}${botConfig.name}`
  };
}

function getPropsDefaultEmbed() {
  return {
    color: Math.floor(Math.random() * 16777215),
    timestamp: new Date(),
    footer: getFooterEmbed()
  };
}

function sendMessageHelp(message) {
  message.channel.send({
    embed: {
      fields: [
        {
          name: "Esses são os meus comandos!",
          value: Helpers.join("\n")
        }
      ],
      ...getPropsDefaultEmbed()
    }
  });
  logger.logCmd(message);
}

module.exports = {
  Bot: clientDiscord,
  getFooterEmbed: getFooterEmbed,
  getPropsDefaultEmbed: getPropsDefaultEmbed
};
