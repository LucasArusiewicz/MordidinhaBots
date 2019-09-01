//Deixa bot online
const http = require("http");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

/*app.get("/", (request, response) => {
  response.sendStatus(200);
});*/

app.get("/message", (request, response) => {
  response.sendFile(__dirname + "/views/message.html");
});

app.post("/message", (request, response) => {
  const { server, channel, message } = request.body;
  const serverFind = bot.guilds.find(g => g.name === server);
  const channelFind = serverFind.channels.find(c => c.name === channel);

  channelFind.send(message);

  response.json("Mensagem enviada!");
});

app.get("/logs", (request, response) => {
  response.sendFile(__dirname + "/views/logs.html");
});

app.get("/info", (request, response) => {
  response.sendFile(__dirname + "/views/info.html");
});

/* APIIIIII */

app.post("/git", (req, res) => {
  // buscar do deploy
});

app.get("/", (request, response) => {
  let link = "https://www.leagueofgraphs.com/pt/champions/counters/lucian";
  var opti = {
    url: link,
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
    }
  };

  Request(opti, (err, resp, body) => {
    var dados = [];
    $ = Cheerio.load(body);
    var texto = $("table").each((i, e) => {
      let a = $("tbody", e)._root["0"];
      dados.push(a);
    });
    console.log(dados);
    console.log(dados.length);
  });
  response.json("Teste Commit 3!");
});

app.get("/api/servidores", (request, response) => {
  let servidores = [];
  bot.guilds.map(server => {
    let dados = {
      id: server.id,
      name: server.name,
      image: server.iconURL,
      channels: {
        dm: [],
        group: [],
        text: [],
        voice: [],
        category: []
      }
    };

    function compare(a, b) {
      if (a.position < b.position) return -1;
      if (a.position > b.position) return 1;
      return 0;
    }

    server.channels.map(channel => {
      let t = channel.type;
      dados.channels[t].unshift({
        position: channel.position,
        name: channel.name
      });
    });

    function compare(a, b) {
      if (a.position < b.position) return -1;
      if (a.position > b.position) return 1;
      return 0;
    }

    dados.channels.dm.sort(compare);
    dados.channels.group.sort(compare);
    dados.channels.text.sort(compare);
    dados.channels.voice.sort(compare);
    dados.channels.category.sort(compare);

    servidores.push(dados);
  });

  response.json(servidores);
});

app.get("/api/info", async (request, response) => {
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

  let dados = {
    username: `${bot.user.username}#${bot.user.discriminator}.`,
    channels: bot.channels.size,
    servers: bot.guilds.size,
    users: bot.users.size,
    link: link
  };
  response.json(dados);
});

app.get("/api/logs", (request, response) => {
  let dados = [];
  let lines = fs
    .readFileSync(__dirname + "/logs.txt", "utf-8")
    .split("\n")
    .filter(Boolean);

  lines.map(e => dados.push(JSON.parse(e)));

  response.json(dados.reverse());
});

app.listen(appConfig.port);
