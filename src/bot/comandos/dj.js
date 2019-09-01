const YTDL = module.require("ytdl-core");
const { Logger } = require("../../utils/log");
let logger = new Logger("DJ", "bot");

module.exports.run = async (bot, message, args) => {
  let servers = {};

  //Proximo ou Skip
  if (args[0] == "n") {
    var server = servers[message.guild.id];
    if (server.dispatcher) server.dispatcher.end();
  }

  //stop ou pause
  if (args[0] == "p") {
    var server = servers[message.guild.id];
    if (message.guild.voiceConnection)
      message.guild.voiceConnection.disconnect();
  }
  if (!args[0]) {
    message.channel.sendMessage("Cade o link do som rapaz?");
    return;
  }
  if (!message.member.voiceChannel) {
    message.channel.sendMessage(
      "Quer que eu toque o som como? Entra em um canal de voz aí meu irmão."
    );
    return;
  }

  if (!servers[message.guild.id])
    servers[message.guild.id] = {
      queue: []
    };

  var server = servers[message.guild.id];

  logger.verbose(`Adicionando link a fila: ${args[0]}`);
  server.queue.push(args[0]);

  if (!message.guild.voiceConnection)
    message.member.voiceChannel.join().then(function(connection) {
      play(connection, message);
    });

  function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(
      YTDL(server.queue[0], { filter: "audioonly" })
    );

    server.queue.shift();
    server.dispatcher.on("end", function() {
      if (server.queue[0]) {
        play(connection, message);
      } else {
        connection.disconnect();
      }
    });
  }
};

module.exports.name = "dj";
module.exports.help = "Toco música pra galera.";
