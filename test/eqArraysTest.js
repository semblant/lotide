const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Test Case: Checking if 2 arrays of the same numbers are equal
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Test Case: Ensuring that 2 arrays of different numbers fails
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // Test Case: Ensuring that 2 arrays with different string/number combos fails
assertEqual(eqArrays(['1', '2', '3',], ['1', '2', '3']), true); // Test Case: Checking that 2 arrays of the same strings are equal
