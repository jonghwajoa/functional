const map = require('./map');

const args1 = (a, b) => b;

const keys = list => map(list, args1);

module.exports = keys;
