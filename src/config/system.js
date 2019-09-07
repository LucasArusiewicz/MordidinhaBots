module.exports = {
  password: process.env.PASSWORD ? process.env.PASSWORD : "password",
  verbose: process.env.LOCALE ? process.env.LOCALE == "true" : false,
  locale: process.env.LOCALE ? process.env.LOCALE : "pt-BR"
};
