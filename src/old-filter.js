const oldFilter = (list, predicate) => {
  const newArray = [];
  const length = list.length;
  for (let i = 0; i < length; i++) {
    if (predicate(list[i], i, list)) {
      newArray.push(list[i]);
    }
  }
  return newArray;
};

module.exports = oldFilter;
