/**
 * The assertEqual function compares two values and logs a message to the
 * console indicating whether they are equal or not.
 *
 * @param {any} actual - The actual value to be compared.
 * @param {any} expected
 *
 **/
const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// Do not modify the below

module.exports = assertEqual;