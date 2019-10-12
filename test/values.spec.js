const should = require('should');
const values = require('../src/values');

describe('values...', () => {
  it('값만 반환한다.', () => {
    const obj = { a: 1, b: 2 };

    const valuesString = values(obj).toString();
    const expectedString = [1, 2].toString();
    valuesString.toString().should.be.equal(expectedString);
  });

  it('값만 반환한다2.', () => {
    const obj = [1, 2, 3, 4, 5];

    const valuesString = values(obj).toString();
    const expectedString = [1, 2, 3, 4, 5].toString();
    valuesString.toString().should.be.equal(expectedString);
  });
});
