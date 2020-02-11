import bcrypt, { genSaltSync } from 'bcrypt';

const encryptPassword = async ({ password }) => bcrypt.hash(password, genSaltSync());

const compareEncrypt = async (password, hash) => bcrypt.compare(password, hash);

export { compareEncrypt, encryptPassword };
