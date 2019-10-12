const isArrayLike = require('./is-array-like');

const bloop = (newData, body) => {
  return (data, iteratee) => {
    const newArray = newData(data);
    if (isArrayLike(data)) {
      const length = data.length;
      for (let i = 0; i < length; i++) {
        body(iteratee(data[i], i, data), newArray);
      }
      return newArray;
    }

    for (const key in data) {
      body(iteratee(data[key], key, data), newArray);
    }
    return newArray;
  };
};

const bloopMap = bloop(() => [], (value, object) => object.push(value));
const bloopEach = bloop(value => value, () => {});

module.exports = {
  map: bloopMap,
  each: bloopEach,
};
