const { hash, compare, genSaltSync } = require('bcrypt');

const encryptPassword = async ({ password }) => hash(password, genSaltSync());

const compareEncrypt = async (password, hashed) => compare(password, hashed);

module.exports = { compareEncrypt, encryptPassword };
