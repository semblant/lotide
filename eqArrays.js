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
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(['1', '2', '3',], ['1', '2', '3']), true); // => should PASS
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), true); // => should FAIL