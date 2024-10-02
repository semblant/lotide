/*
We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
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

const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) { // loops over each index in the sentence
    let indArr = []; // empty array for the values
    if (sentence[index] !== ' ') {
      if (results.hasOwnProperty(sentence[index])) { // if property already exists
        indArr.push(Number(index)); // store current index into the empty array
        results[sentence[index]] = results[sentence[index]].concat(indArr); // concat the existing array with the one we just pushed.
      } else { // if property doesn't exist, add it
        indArr.push(Number(index)); // store index in empty array
        results[sentence[index]] = indArr; // create the key-value pair
      }
    }
  }
  return results;
};

// Test Case: ensure letterPositions() works
//console.log(letterPositions(''));
console.log(letterPositions('hello'));
//console.log(letterPositions('   '));
//console.log(letterPositions('% # Hi There !'));
//console.log(letterPositions('1, 2, 2, 3'));

// Test Case: Assertion tests
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions("H3ll0 W0RLD!")['!'], [11]);
assertArraysEqual(letterPositions('1, 2, 2, 3')['2'], [3, 6]);


// Test case: ensure original sentence is unchanged.
//const testSentence2 = 'lighthouse in the house?';
//letterPositions(testSentence2);
//assertArraysEqual(testSentence2, 'lighthouse in the house?')
