const { hash, compare, genSalt } = require('bcrypt');

const encryptPassword = async ({ password }) => hash(password, await genSalt());

const compareEncrypt = async (password, hashed) => compare(password, hashed);

module.exports = { compareEncrypt, encryptPassword };
