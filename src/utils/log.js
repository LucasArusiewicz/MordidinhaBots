const { locale, verbose } = require("../config");
const fs = require("fs");

class Logger {
  constructor(agent, fileName) {
    this.agent = agent ? agent : "SYS";
    this.fileName = `${__dirname}/${fileName ? fileName : "system"}.log`;
  }

  _dateNow() {
    return new Date().toLocaleString(locale);
  }

  _appendLog(data) {
    fs.appendFile(this.fileName, data, err => {
      if (err) throw err;
    });
  }

  logCmd(message) {
    let logObj = {
      date: this._dateNow(),
      cmd: String(message),
      user_name: message.author.username,
      user_img: message.author.avatarURL,
      user_tag: message.author.tag,
      channel: message.channel.name,
      server_name: message.guild.name,
      server_img: message.guild.iconURL
    };
    let log = JSON.stringify(logObj);

    this._appendLog(log);
    this.verbose(`${logObj.user_tag} ${logObj.cmd}`);
  }

  _log(type, log) {
    let message;

    if (typeof log == "object") {
      message = JSON.stringify(log);
    } else if (Array.isArray(log)) {
      message = `Array(${log.length}): ${log.join(", ")}`;
    } else if (typeof log == "string") {
      message = log;
    } else {
      message = `${typeof log}: ${log}`;
    }

    console.log(`${this._dateNow()} [${type}] - [${this.agent}]: ${message}`);
  }

  error(log) {
    this._log("error", log);
  }

  info(log) {
    this._log("info", log);
  }

  verbose(log) {
    if (verbose) this._log("verbose", log);
  }

  warning(log) {
    this._log("warning", log);
  }
}

module.exports = {
  Logger: Logger,
  logger: new Logger()
};
