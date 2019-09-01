const { getPropsDefaultEmbed } = require("../bot");
const { Logger } = require("../../utils/log");
let logger = new Logger("INVITE", "bot");

module.exports.run = async (bot, message, args) => {
  try {
    let link = await bot.generateInvite([
      "ADMINISTRATOR",
      "CREATE_INSTANT_INVITE",
      "KICK_MEMBERS",
      "BAN_MEMBERS",
      "MANAGE_CHANNELS",
      "MANAGE_GUILD",
      "ADD_REACTIONS",
      "VIEW_AUDIT_LOG",
      "READ_MESSAGES",
      "SEND_MESSAGES",
      "SEND_TTS_MESSAGES",
      "MANAGE_MESSAGES",
      "EMBED_LINKS",
      "ATTACH_FILES",
      "READ_MESSAGE_HISTORY",
      "MENTION_EVERYONE",
      "USE_EXTERNAL_EMOJIS",
      "EXTERNAL_EMOJIS",
      "CONNECT",
      "SPEAK",
      "MUTE_MEMBERS",
      "DEAFEN_MEMBERS",
      "MOVE_MEMBERS",
      "USE_VAD",
      "CHANGE_NICKNAME",
      "MANAGE_NICKNAMES",
      "MANAGE_ROLES",
      "MANAGE_ROLES_OR_PERMISSIONS",
      "MANAGE_WEBHOOKS",
      "MANAGE_EMOJIS"
    ]);

    if (args[0] === "metodo_string") {
      return link;
    }

    message.channel.send({
      embed: {
        fields: [
          {
            name: "Link Invite:",
            value: link
          }
        ],
        ...getPropsDefaultEmbed()
      }
    });
    return;
  } catch (error) {
    logger.error(error.stack);
  }
};

module.exports.name = "invite";
module.exports.help =
  "Gero um link de invite para eu entrar em outro servidor.";
