const isArrayLike = require('../src/is-array-like');
const should = require('should');

describe('isArrayLike....', () => {
  it('arrayLike라면 true를 반환한다..', () => {
    const arr = [1, 2, 3, 4, 5];
    const arr2 = [];
    const obj = { a: 1, b: 2, length: 2 };
    const obj2 = { length: 0 };
    const string = 'string';
    isArrayLike(arr).should.be.true();
    isArrayLike(arr2).should.be.true();
    isArrayLike(obj).should.be.true();
    isArrayLike(obj2).should.be.true();
    isArrayLike(string).should.be.true();
  });

  it('arrayLike가 아니라면 false 를 반환한다..', () => {
    const obj = {};
    const string = 10;
    isArrayLike(string).should.be.false();
    isArrayLike(obj).should.be.false();
  });
});
