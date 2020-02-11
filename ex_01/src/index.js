const { compareEncrypt, encryptPassword } = require('./actions/Cryptography');

console.log(encryptPassword({ password: '123456' }));
