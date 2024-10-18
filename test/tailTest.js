const assertEqual = require('../assertEqual')
const tail = require('../tail')

// Test case 1: testing the equality of 2 string arrays. It is always false. Need to find a workaround.
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]);

// Test case 2: Check returned array elements of string array.
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // expecting two elements
assertEqual(result[0], "Lighthouse"); // expecting first element to be "Lighthouse"
assertEqual(result[1], "Labs"); // expecting second element to be "Labs"
assertEqual(result[1], "Labs");

// Test case 3: Check returned array elements of empty array
const result2 = tail([]);
assertEqual(result2.length, 0); // expecting 0 elements
assertEqual(result2[0], undefined); // expecting first element to be undefined

// Test case 4: Check returned array elements of 1-element array
const result3 = tail(["Hello"]);
assertEqual(result3.length, 0); // expect array length to be 0
assertEqual(result3[0], undefined); // expecting first element to be undefined.

// Test case 3: check if original array is not modified
const items = ["phone", "computer", "charger"]; // new array
tail(items); // seeing if tail affects the array items at all
assertEqual(items.length, 3); // after running tail on items, it should still have 3 items.
