const isArrayLike = require('../src/is-array-like');

const map = (data, iteratee) => {
  const newArray = [];
  if (isArrayLike(data)) {
    const length = data.length;
    for (let i = 0; i < length; i++) {
      newArray.push(iteratee(data[i], i, data));
    }
    return newArray;
  }

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      newArray.push(iteratee(data[key], key, data));
    }
  }
  return newArray;
};

module.exports = map;
