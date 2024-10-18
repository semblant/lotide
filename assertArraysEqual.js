// This function compares values of two arrays, returns true or false
const eqArrays = require('./eqArrays');

// This function compares two arrays and logs a message indicating whether they are equal
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) { // if the return value is true
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {// if return value is NOT true
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;