function main(req, res) {
  res.status(200).json({ message: "teste", status: "ok" });
}

module.exports = {
  main
};
