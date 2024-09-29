const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// pseudocode
////take first array first value and compare with second array first value
//1. for values in arr1 {store value for comparison}
//2. for values in arr2 {store value for comparison}
//3. if values match {result = true}, else {false} go to next iteration

const eqArrays = function(arr1, arr2) {
  if (arr1.length  !== arr2.length) { // check if arrays are the same length, else return false.
    return false; // exit loop if not equal in length
  }
  for (let i = 0; i < arr1.length; i++) { // loop through all elements
    // only need to use arr1.length as the condition since they should be the same length
    if (arr1[i] !== arr2[i]) {
      return false; // exit loop if values aren't equal
    }
  }
  return true; // return true after checking all elements
};

eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(['1', '2', '3',], ['1', '2', '3']), true); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true); // => should FAIL