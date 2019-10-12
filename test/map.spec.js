const should = require('should');
const map = require('../src/map');

describe('map...', () => {
  it('predicate를 전달한 값을 연산한 배열을 반환한다.', () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = value => value * 2;
    const newArray = map(arr, predicate);
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      (arr[i] * 2).should.be.equal(newArray[i]);
    }
  });

  it('새로운 배열을 반환한다.', () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = value => value;
    const newArray = map(arr, predicate);

    arr.should.not.be.equal(newArray);
    arr.toString().should.be.equal(newArray.toString());
  });

  it('object도 가능하다', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const predicate = value => value * 2;
    const newArray = map(obj, predicate);
    const expected = [2, 4, 6];

    newArray.toString().should.be.equal(expected.toString());
  });
});
