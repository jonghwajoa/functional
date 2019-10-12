const should = require('should');

const { each, map } = require('../src/bloop');

describe('bloop...', () => {
  describe('each...', () => {
    it('..', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = each(arr, console.log);
      result.toString().should.be.equal(arr.toString());
    });
  });

  describe('map...', () => {
    it('..', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = map(arr, value => value * 2);
      const expected = [2, 4, 6, 8, 10];
      result.toString().should.be.equal(expected.toString());
    });
  });
});
