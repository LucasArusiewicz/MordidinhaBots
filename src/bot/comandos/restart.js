const { restartProcess } = require("../../utils/system");
const {
  botConfig: { admin }
} = require("../../config");

module.exports.run = async (bot, message, args) => {
  if (message.author.id == admin) {
    await message.channel.send("Reiniciando.", {
      tts: true
    });
    await message.delete();
    restartProcess();
  } else {
    message.channel.send("Sem permissão para executar esse comandos");
  }
};

module.exports.name = "restart";
module.exports.help = "Reinicio o server.";
