/*
Implement without() which will return a subset of a given array, removing unwanted elements.
This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) { // if the return value is true
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {// if return value is NOT true
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//psuedocode
//1. take in 2 arrays
//2. for value in itemsToRemove {check if source[value] exists}
//3. for value in source {check if itemToRemove[value] !== source[value] at any index}
//    3a. if not contained in source array, push source[value] to newArr
//4. return newArr

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let val of source) { //check each element of source array
    let found = false;
    for (let item of itemsToRemove) { // check each element of itemsToRemove array
      if (item === val) {
        found = true;
        break;
      }
    }
    if (!found) {
      newArr.push(val);
    }
  }
  return newArr;
};

assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']) // => should PASS
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1']) // => should FAIL
assertArraysEqual(without([1, 2, 3], [1]), []); // => should FAIL
assertArraysEqual(without(['bootcamp', 'labs', 'lighthouse'],['bootcamp', 'lighthouse']), ['labs']) // => should PASS

// Test case: ensure original array is not modified
const words = ['Hello', 'World', 'lighthouse'];
without(words, ['lighthouse']);
assertArraysEqual(words, ['Hello', 'World', 'lighthouse']) // => should PASS to prove original array is not altered