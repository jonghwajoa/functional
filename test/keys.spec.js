const should = require('should');
const keys = require('../src/keys');

describe('keys....', () => {
  it('object의 key를 반환한다..', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keysString = keys(obj).toString();
    const expectedString = ['a', 'b', 'c'].toString();

    keysString.should.be.equal(expectedString);
  });
});
