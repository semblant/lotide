// This function compares two arrays and returns true if they are equal and false if they are not.
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3],[1, 2, 3]); // Test Case: Checking if 2 arrays of the same numbers are equal
assertArraysEqual([1, 2, 3],[3, 2, 1]); //Test Case: Ensuring that 2 arrays of different numbers fails
assertArraysEqual(['1', '2', '3'],['1', '2', '3']); // Test Case: Checking that 2 arrays of the same strings are equal
assertArraysEqual(['1', '2', '3'],['1', '2', 3]); // Test Case: Ensuring that 2 arrays with different string/number combos fails
