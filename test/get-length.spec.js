const should = require('should');
const getLength = require('../src/get-length');

describe('# getLength...', () => {
  it('길이를 반환한다.', () => {
    const test1 = [1, 2, 3, 4, 5];
    const test2 = [];
    const test3 = [1, 2, 3];
    const test4 = [1, 2, 3, 4];
    const test5 = 'string';

    getLength(test1).should.be.equal(5);
    getLength(test2).should.be.equal(0);
    getLength(test3).should.be.equal(3);
    getLength(test4).should.be.equal(4);
    getLength(test5).should.be.equal(6);
  });
});
