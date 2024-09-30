/* CHALLENGE
* Create a function flatten which will take in an array
* containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/
/*

* Function eqArrays(): evaluates if two arrays are identical
* Checks if length of 2 arrays are identical, returns true or false
*/
const eqArrays = function(arr1, arr2) {
  if (arr1.length  !== arr2.length) { // check if arrays are the same length, else return false.
    return false; // exit loop if not equal in length
  }
  for (let i = 0; i < arr1.length; i++) { // loop through all elements in arr1
    if (Array.isArray(arr1[i])) { // check if the arr[i] (nested element) is an array
      for (let j = 0; j < arr1[i].length; j++) { // loop through elements in nested array
        if (arr1[i][j] !== arr2[i][j]) { // compare nested array elements to same index of element in arr2
          return false; // exit loop the nested array loop if nested elements not equal
        }
      }
    }
  }
  return true; // return true after checking all elements
};

/*
* Function assertArraysEqual(): calls eqArrays function and prints to the console if the assertion has passed or failed.
* Calls eqArrays() which evaluates if the arrays are identical
* Console logs if assertion has passed or failed.
*/
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) { // if the return value is true
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {// if return value is NOT true
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


/*
* Function flatten(): takes a nested array and turns it into a non-nested array - "flat array".
* Uses nested loops to push all items to flatArray.
*
* pseudocode
*  1. take 1 array of arrays
*  2. let flatArr = [] // to store values of each array in.
*  2. for outer array, {loop through each inner array}
*  3. for value of arr[n]{push to flatArr}
*/
const flatten = function(array) {
  let flatArr = [];
  for (let arr of array) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        flatArr.push(arr[i]);
      }
    } else {
      flatArr.push(arr);
    }
  }
  return flatArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // =>  should PASS
assertArraysEqual(flatten([1, 2, [3, 4], 5, ["Hello", "World"]]), [1, 2, 3, 4, 5, 'Hello', 'World']); // => Should PASS
assertArraysEqual(flatten([1, 2, [3, 4], 5, ["Hello", "World"]]), []); // => Should FAIL
assertArraysEqual(flatten([1, 2, [3, 4], 5, ["Hello", "World"]]), [1,2,[3,4]]); // => Should FAIL

// Test case: checking original array is unchanged
const testArr = [1, 3, [6, 7], ['lighthouse', 'labs', 'bootcamp']];
flatten(testArr);
assertArraysEqual(testArr, [1, 3, [6, 7], ['lighthouse', 'labs', 'bootcamp']]);