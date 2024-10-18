const assertEqual = require('../assertEqual')
const tail = require('../tail')

// Test case 1: testing the equality of 2 string arrays. It is always false. Need to find a workaround.
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

// Test case 2: Check returned array elements of string array.
const resultStringArray = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(resultStringArray.length, 2); // expecting two elements
assertEqual(resultStringArray[0], "Lighthouse"); // expecting first element to be "Lighthouse"
assertEqual(resultStringArray[1], "Labs"); // expecting second element to be "Labs"

// Test case 3: Check returned array elements of empty array
const resultEmptyArray = tail([]);
assertEqual(resultEmptyArray.length, 0); // expecting 0 elements
assertEqual(resultEmptyArray[0], undefined); // expecting first element to be undefined

// Test case 4: Check returned array elements of 1-element array
const resultOneElementArray = tail(["Hello"]);
assertEqual(resultOneElementArray.length, 0); // expect array length to be 0
assertEqual(resultOneElementArray[0], undefined); // expecting first element to be undefined.

// Test case 3: check if original array is not modified
const items = ["phone", "computer", "charger"]; // new array
tail(items); // seeing if tail affects the array items at all
assertEqual(items.length, 3); // after running tail on items, it should still have 3 items.
