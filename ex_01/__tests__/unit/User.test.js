const UserSchema = require('../../src/models/User');
const { setName, setEmail, setPassword } = require('../../src/actions/User');

test('Set the username', () => {
  expect(setName(UserSchema)('foo'))
    .toBe('foo');
});

test('Set the email', () => {
  expect(setEmail(UserSchema)('foo@email.com'))
    .toBe('foo@email.com');
});

test('Set the password', () => {
  expect(setPassword(UserSchema)('123456'))
    .toBe('...');
});
