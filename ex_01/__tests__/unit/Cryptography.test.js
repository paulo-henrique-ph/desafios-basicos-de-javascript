import { test, expect } from 'jest';
import { compareEncrypt, encryptPassword } from '../../src/actions/Cryptography';

test('return a hashed string of the password', () => {
  expect(encryptPassword({ password: '123456' }))
    .toBe('...');
});
