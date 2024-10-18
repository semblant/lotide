const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1,2]), []); // Test Case: checking if 2-element array returns ''
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Test Case: Checking that a 5-element array returns the middle element
assertArraysEqual(middle([1, 2, 4, 10, 14, 1]), [4, 10]); // // Test Case: Checking that a 6-element array returns the two middle elements
assertArraysEqual(middle([1, 2, "Hello", 10, 14]), ["Hello"]); // Test Case: Checking that a 5-element array with tect returns the middle element

// Test Case: check the original array has not been changed.
const testArr = [1, 2, 3, 'Hello', 4, 6];
middle(testArr);
assertArraysEqual(testArr, [1, 2, 3, 'Hello', 4, 6]);