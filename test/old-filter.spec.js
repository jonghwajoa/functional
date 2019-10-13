const should = require('should');
const oldFilter = require('../src/old-filter');

describe('oldFilter...', () => {
  it('filter된 필터링된 배열을 반환한다.', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const expectedArr = [1, 2, 3];
    const predicate = number => number < 4;
    const fillteredArr = oldFilter(arr, predicate);
    fillteredArr.should.be.eql(expectedArr);
  });

  it('filter된 새로운 객체를 반환한다.', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const expectedArr = [1, 2, 3];
    const predicate = number => number < 4;
    const fillteredArr = oldFilter(arr, predicate);
    fillteredArr.should.not.be.equal(expectedArr);
  });

  it('filter된 새로운 객체를 반환한다.', () => {
    const arr = [
      { name: '하하', age: 22 },
      { name: '하하', age: 23 },
      { name: '하하', age: 24 },
      { name: '하하', age: 25 },
    ];

    const predicate = person => person.age < 24;
    const fillteredArr = oldFilter(arr, predicate);
    fillteredArr.should.be.length(2);
    fillteredArr[0].should.be.properties({ name: '하하', age: 22 });
    fillteredArr[1].should.be.properties({ name: '하하', age: 23 });
  });
});
