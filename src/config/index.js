module.exports = {
  appConfig: require("./app"),
  botConfig: require("./bot"),
  githubConfig: require("./github"),
  youtubeConfig: require("./youtube"),
  verbose: process.env.LOCALE ? process.env.LOCALE == "true" : false,
  locale: process.env.LOCALE ? process.env.LOCALE : "pt-BR"
};
