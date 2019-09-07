function main(req, res) {
  res.status(200).json({ message: "oi", status: "ok" });
}

module.exports = {
  main
};
