import bcrypt from 'bcrypt';

const encryptPassword = async ({ password }) => bcrypt.hash(password);

const compareEncrypt = async (password, hash) => bcrypt.compare(password, hash);

export { compareEncrypt, encryptPassword };
