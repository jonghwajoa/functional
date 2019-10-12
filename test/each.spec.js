const should = require('should');
const each = require('../src/each');

describe('each..', () => {
  it('...', () => {
    const arr = [1, 2, 3, 4];
    each(arr, console.log)
      .toString()
      .should.be.equal(arr.toString());
  });
});
