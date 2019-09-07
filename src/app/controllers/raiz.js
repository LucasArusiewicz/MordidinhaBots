function main(req, res) {
  res.status(200).json({ message: "teste deploy", status: "ok" });
}

module.exports = {
  main
};
