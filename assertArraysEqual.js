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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) { // if the return value is true
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {// if return value is NOT true
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3],[1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3],[3, 2, 1]); // => should FAIL
assertArraysEqual(['1', '2', '3'],['1', '2', '3']); // => should PASS
assertArraysEqual(['1', '2', '3'],['1', '2', 3]); // => should FAIL -- prints both arrays as a string so it looks like they're equal??