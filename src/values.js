const map = require('./map');
const identity = require('./identity');

const values = list => map(list, identity);

module.exports = values;
