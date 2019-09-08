const { Bot } = require("../../bot");

function status(req, res) {
  let info = {
    channels: Bot.channels.size,
    guilds: Bot.guilds.size,
    users: Bot.users.size
  };

  res.status(200).json(info);
}

function avatar(req, res) {
  let info = {
    avatar: Bot.user.avatar,
    avatarURL: Bot.user.avatarURL
  };

  res.status(200).json(info);
}

module.exports = {
  status,
  avatar
};
