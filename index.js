// Caso esteja rodando via linha de comando, carrega variáveis de ambiente
!process.env.PORT ? require("dotenv").config() : null;

const { Bot } = require("./src/bot");
const { Api } = require("./src/api");
