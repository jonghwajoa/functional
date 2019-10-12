const should = require('should');

const identity = require('../src/identity');

describe('identity..', () => {
  it('인자 그대로 반환한다.', () => {
    const arr = [1, 2, 3, 4];
    const string = '12321as';
    const number = 3;
    const obj = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    identity(arr).should.be.equal(arr);
    identity(string).should.be.equal(string);
    identity(number).should.be.equal(number);
    identity(obj).should.be.equal(obj);
    identity(obj).should.not.be.equal(obj2);
  });
});
