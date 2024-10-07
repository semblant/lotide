/*
* Function eqArrays(): evaluates if two arrays are identical
* Checks if length of 2 arrays are identical, returns true or false
*/
const eqArrays = (arr1, arr2) => {
  if (arr1.length  !== arr2.length) return false; // exit loop if not equal in length
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false; // exit loop if values aren't equal
  }
  return true; // return true after checking all elements
};

/*
* Function assertArraysEqual(): calls eqArrays function and prints to the console if the assertion has passed or failed.
* Calls eqArrays() which evaluates if the arrays are identical
* Console logs if assertion has passed or failed.
*/
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1,arr2)) console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);  // if the return value is true
  else console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`); // if return value is NOT true
};

/*
* takeUntil()
*
* It will take in two parameters as well:
* The array to work with
* The callback (which Lodash calls "predicate")
*
* The function will return a "slice of the array with elements taken from the beginning."
* It should keep going until the callback/predicate returns a truthy value.
*/

/*
* Function takeUntil() slices the beginning of an array until a callback is truthy.
* Parameters: array, callback function
* Returns: New array
*/
const takeUntil = (array, callback) => {
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};

// Test Case: Ensure the code is working
// This test ensures that the takeUntil function applies the callback correctly to each element in the array
const sentence = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const sentenceResults = takeUntil(sentence, char => char === ',');
assertArraysEqual(sentenceResults, ['I\'ve', 'been', 'to', 'Hollywood']);

// Test Case: Empty array
// This test ensures that the takeUntil function handles empty arrays.
const empty = [];
const emptyResults = takeUntil(empty, x => x + 1);
assertArraysEqual(emptyResults, []);

// Test Case: Ensure original array is unchanged
// This test ensures that takeUntil function doesn't change the original array.
const numbers = [1, 2, 5, 7, 2, -1, 2, 4, 5];
takeUntil(numbers, x => x < 0);
assertArraysEqual(numbers, [1, 2, 5, 7, 2, -1, 2, 4, 5]);