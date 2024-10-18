// This function compares two values and logs a message indicating whether they are equal
const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// Do not modify the below

module.exports = assertEqual;