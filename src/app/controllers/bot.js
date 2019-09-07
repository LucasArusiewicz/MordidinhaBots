const { Bot } = require("../../bot");

function status(req, res) {
  let info = {
    canais: Bot.channels.size,
    servers: Bot.guilds.size,
    users: Bot.users.size
  };

  res.status(200).json(info);
}

module.exports = {
  status
};
