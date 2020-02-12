const UserSchema = require('./models/User');
const { User } = require('./actions/User');
const { compareEncrypt } = require('./actions/Cryptography');

console.log(User.setName(UserSchema)('foo'));
console.log(User.setEmail(UserSchema)('foo@email.com'));
console.log(User.setPassword(UserSchema)('123456'));
