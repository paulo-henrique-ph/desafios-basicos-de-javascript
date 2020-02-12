const UserSchema = require('../../src/models/User');
const { User } = require('../../src/actions/User');

describe('User functions', () => {
  it('Set the username', (done) => {
    expect(User.setName(UserSchema)('foo'))
      .toBe('foo');
    done();
  });

  it('Set the email', (done) => {
    expect(User.setEmail(UserSchema)('foo@email.com'))
      .toBe('foo@email.com');
    done();
  });

  it('Set the password', async (done) => {
    expect(await User.setPassword(UserSchema)('123456'))
      .toEqual(expect.any(String));
    done();
  });
});
