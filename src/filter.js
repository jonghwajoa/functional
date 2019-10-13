const each = require('./each');

const filter = (list, predicate) => {
  const newArray = [];
  each(list, (value, index, list) => {
    if (predicate(value, index, list)) {
      newArray.push(value);
    }
  });
  return newArray;
};

module.exports = filter;
