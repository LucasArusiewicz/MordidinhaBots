const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  let tempo = moment().format("LTS");
  message.channel.send(tempo.substr(0, tempo.length - 2), {
    tts: true
  });
  message.delete();
};

module.exports.name = "hora";
module.exports.help = "Te digo que horas são.";
