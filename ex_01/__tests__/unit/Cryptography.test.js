const { compareEncrypt, encryptPassword } = require('../../src/actions/Cryptography');

test('return a hashed string of the password', async () => {
  expect(await encryptPassword({ password: '123456' }))
    .toBe('...');
});

test('compare a password to it\'s hashed counterpart', async () => {
  expect(await compareEncrypt('123456', '...'))
    .toBe(true);
});
