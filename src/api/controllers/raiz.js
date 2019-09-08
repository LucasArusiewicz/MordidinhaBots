function main(req, res) {
  res.status(200).sendFile("src/app/build/index.html");
}

module.exports = {
  main
};
