/* CHALLENGE
* Implement middle which will take in an array and return the middle-most element(s) of the given array.
* 1. Arrays with 1, 2 elements should return an empty array
* 2. Odd numbered arrays should return one element.
* 3. Even numbered arrays should return two elements in the middle.
*/

/*

* Function eqArrays(): evaluates if two arrays are identical
* Checks if length of 2 arrays are identical, returns true or false
*/
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
Function middle(): takes an array and returns the middle number(s) as an array
* Checks if the length has two elements, returns an empty array.
* Checks for even numbered arrays, returns the two middle elements as an array.
* Checks for odd numbered arrays, returns the middle element as an array.
*/
const middle = function(arr) {
  let midArr = [];
  if (arr.length < 2) {
    return midArr;
  } else if (arr.length % 2 === 0) { // check if the array is even numbered
    let middleInd = arr.length / 2;
    midArr.push(arr[middleInd - 1]);
    midArr.push(arr[middleInd]);
  } else {
    let middleInd = Math.floor(arr.length / 2);
    midArr.push(arr[middleInd]);
  }
  return midArr;
};

assertArraysEqual(middle([1]), []); // => 2-element array should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4, 5]); // => 5 element array should FAIL
assertArraysEqual(middle([1, 2, 4, 10, 14, 1]), [4, 10]); // => 6 element array should PASS
assertArraysEqual(middle([1, 2, "Hello", 10, 14]), ["Hello"]); // 5 element array with text should PASS

// Test Case: check the original array has not been changed.
const testArr = [1, 2, 3, 'Hello', 4, 6];
middle(testArr);
assertArraysEqual(testArr, [1, 2, 3, 'Hello', 4, 6]);