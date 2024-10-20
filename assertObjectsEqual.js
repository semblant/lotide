const eqObjects = require('./eqObjects');

/**
 * The assertObjectsEqual function compares two objects and logs a message to the
 * console indicating whether the objects are equal.
 *
 * @param {Object} actual - The first object to compare.
 * @param {Object} expected - The second object to compare.
 *
 **/
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); // if the return value is true
  else console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); // if return value is NOT true
};

module.exports = assertObjectsEqual;