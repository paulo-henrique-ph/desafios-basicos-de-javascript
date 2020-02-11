const UserSchema = require('./models/User');
const { setName, setEmail, setPassword } = require('./actions/User');
const { compareEncrypt } = require('./actions/Cryptography');

console.log(setName(UserSchema)('foo'));
console.log(setEmail(UserSchema)('foo@email.com'));
console.log(setPassword(UserSchema)('123456'));
