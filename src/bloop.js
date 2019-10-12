const isArrayLike = require('./is-array-like');
const pushTo = require('./push-to');
const noop = require('./noop');
const array = require('./array');
const identity = require('./identity');

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

const bloopMap = bloop(array, pushTo);
const bloopEach = bloop(identity, noop);

module.exports = {
  map: bloopMap,
  each: bloopEach,
};
