const { restartProcess } = require("../../utils/system");
const {
  systemConfig: { password }
} = require("../../config");

function restart(req, res) {
  if (req.body.password == password) {
    restartProcess("sistema/restart");
  } else {
    res.status(500).send("Opa !");
  }
}

module.exports = {
  restart
};
