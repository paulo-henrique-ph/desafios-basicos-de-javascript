const { compareEncrypt, encryptPassword } = require('../../src/actions/Cryptography');

describe('Cryptography functions', () => {
  it('Return a hashed string of the password', async (done) => {
    expect(await encryptPassword({ password: '123456' }))
      .toEqual(expect.any(String));
    done();
  });

  it('Compare a password to it\'s hashed counterpart', async (done) => {
    const hashed = await encryptPassword({ password: '123456' });

    expect(await compareEncrypt('123456', hashed))
      .toBe(true);
    done();
  });

  it('Compare a password to a different hash counterpart', async (done) => {
    const hashed = await encryptPassword({ password: '654321' });

    expect(await compareEncrypt('123456', hashed))
      .toBe(false);
    done();
  });
});
