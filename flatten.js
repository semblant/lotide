
const assertArraysEqual = require('./assertArraysEqual');

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
assertArraysEqual(flatten([1, 2, [3, 4], 5, ["Hello", "World"]]), [1,2,[3,4]]); // => Should FAI
// Test case: checking original array is unchanged
const testArr = [1, 3, [6, 7], ['lighthouse', 'labs', 'bootcamp']];
console.log(flatten(testArr));
assertArraysEqual(testArr, [1, 3, [6, 7], ['lighthouse', 'labs', 'bootcamp']]);

