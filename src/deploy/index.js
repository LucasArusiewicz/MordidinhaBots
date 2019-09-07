const crypto = require("crypto");
const cmd = require("node-cmd");
const {
  githubConfig: { webhooks_password },
  systemConfig: { password }
} = require("../config");
const { Logger } = require("../utils/log");

let logger = new Logger("DEPLOY", "deploy");

function getAssinaturaGitHubPassword(body) {
  logger.verbose("Pegando Assinatura.");
  let hmac = crypto.createHmac("sha1", webhooks_password);
  return "sha1=" + hmac.update(JSON.stringify(body)).digest("hex");
}

function splitCommitsBody(body) {
  return body.head_commit.message.split("\n").length == 1
    ? body.head_commit.message
    : body.head_commit.message
        .split("\n")
        .map((el, i) => (i !== 0 ? "                       " + el : el))
        .join("\n");
}

function executaShellDeploy() {
  logger.verbose("Atualizando permissões do Script.");
  cmd.run("chmod 777 git.sh");

  logger.verbose("Executando Script.");
  cmd.get("./git.sh", (err, data) => {
    if (data) logger.verbose(data);
    if (err) logger.error(err);
  });

  logger.verbose("Atualizando projeto.");
  cmd.run("refresh");
}

function routeDeploy(req, res) {
  const { body, headers } = req;
  let signature = getAssinaturaGitHubPassword(body);

  // Caso seja tenha um push no repositório
  if (
    (headers["x-github-event"] == "push" &&
      signature == headers["x-hub-signature"]) ||
    body.password == password
  ) {
    logger.verbose("Novo Push realizado.");
    executaShellDeploy();

    let commits = splitCommitsBody(body);
    console.log(
      `> [GIT] Atualizado a partir da branch origin/master\n` +
        `        Ultimos commits: ${commits}`
    );
  }

  return res.sendStatus(200);
}

module.exports = {
  routeDeploy
};
