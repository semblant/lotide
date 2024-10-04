const eqArrays = function(arr1, arr2) {
  if (arr1.length  !== arr2.length) return false; // exit loop if not equal in length
  for (let i = 0; i < arr1.length; i++) { // loop through all elements
    // only need to use arr1.length as the condition since they should be the same length
    if (arr1[i] !== arr2[i]) return false; // exit loop if values aren't equal
  }
  return true; // return true after checking all elements
};

// Returns true if both objects have identical keys with identical values.
// Otherwise Returns false
const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1); // store object1 keys as array
  const keys2 = Object.keys(object2); // store object2 keys as array
  if (keys1.length !== keys2.length) return false; // return false if object key arrays are not same length
  else {
    for (let key of keys1) { // get the keys from any object
      if (!object2.hasOwnProperty(key)) return false; // if key from object1 doesnt match key from object2 return false
      else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // check if the key is an array
        if (eqArrays(object1[key], object2[key]) === false) return false;
      } else if (object1[key] !== object2[key]) return false; // both objects should have the key, check if values are the same
    }
    return true;
  }
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); // if the return value is true
  else console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); // if return value is NOT true
};

// Test Case: Same keys and values in different positions => should PASS
const shirtObject = {colour: "red", size: "medium"};
const anotherShirtObject = {size: "medium", colour: "red"};
assertObjectsEqual(shirtObject, anotherShirtObject);

// Test Case: One object is longer than the other ==> should FAIL
const longSleeveShirtObject = {size: "medium", colour: "red", sleeveLength: "long"};
assertObjectsEqual(shirtObject, longSleeveShirtObject);

// Test Case: Same keys, different values => should FAIL
const catColourObject = {theo: "grey", marlo: "dark grey"};
const catSizeObject = {theo: "medium", colour: "small"};
assertObjectsEqual(catColourObject, catSizeObject);

// Test Case: Object has array values
const multiColorShirtObject = { colors: ["red", "blue"], size: ["medium", "small"]};
const anotherMultiColorShirtObject = { size: ["small", "medium"], colors: ["blue", "red"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);