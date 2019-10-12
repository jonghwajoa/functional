const getLength = require('./get-length');

const isArrayLike = list => {
  const length = getLength(list);
  return typeof length === 'number' && length >= 0 && length <= Number.MAX_SAFE_INTEGER;
};

module.exports = isArrayLike;
