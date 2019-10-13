const isArrayLike = require('./is-array-like');
const pushTo = require('./push-to');
const noop = require('./noop');
const array = require('./array');
const identity = require('./identity');
const keys = require('./keys');

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

    const keyData = keys(data);
    const length = keyData.length;
    for (let i = 0; i < length; i++) {
      body(iteratee(data[keyData[i]], keyData[i], data), newArray);
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
