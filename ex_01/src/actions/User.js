const { encryptPassword } = require('./Cryptography');

const setName = (Schema) => (name) => Schema.name = name;

const setEmail = (Schema) => (email) => Schema.email = email;

const setPassword = (Schema) => (password) => Schema.password = encryptPassword(password);

module.exports = {
  setName,
  setEmail,
  setPassword,
};
