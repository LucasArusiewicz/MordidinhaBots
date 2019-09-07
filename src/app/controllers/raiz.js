function main(req, res) {
  res.status(200).json({ message: "tchau", status: "ok" });
}

module.exports = {
  main
};
