const eqObjects = require('./eqObjects')

// This function compares two objects and logs a message indicating whether they are equal
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); // if the return value is true
  else console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); // if return value is NOT true
};

module.exports = assertObjectsEqual;