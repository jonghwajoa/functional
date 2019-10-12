const isArrayLike = require('./is-array-like');

const each = (data, iteratee) => {
  if (isArrayLike(each)) {
    const length = data.length;
    for (let i = 0; i < length; i++) {
      iteratee(data[i], i, data);
    }
    return data;
  }

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      iteratee(data[key], key, data);
    }
  }
  return data;
};

module.exports = each;
