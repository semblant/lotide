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
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/


/*
* Function map(): creates a new array based on a callback function
* Parameters: array, callback function
* Return Value: new array
*/
const map = (array, callback) => {
  const results =[]; // create array to store results
  for (let item of array) {
    results.push(callback(item));
  }
  return results; // return results
};

// Test Case: Ensure code works
// This test ensures that the map function correctly applies the callback to each element in the array
const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// Test Case: Empty array
const empty = [];
const emptyResults = map(empty, word => word[0]);
assertArraysEqual(emptyResults, []);

// Test Case: different callback function
// This test ensures the map function works with a callback function that counts the length of each item in array
const candy = ['chocolate', 'gummy bears', 'sucker'];
const resultsCandy = map(candy, word => word.length);
assertArraysEqual(resultsCandy, [9, 11, 6]);

// Test Case: ensure original array is unchanged.
// This test ensures that the map function doesn't change the original array
const cats = ['theo', 'marlo', 'midna', 'gigi', 'norm'];
map(cats, word => word[0]);
assertArraysEqual(cats, ['theo', 'marlo', 'midna', 'gigi', 'norm']);
