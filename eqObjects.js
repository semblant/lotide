
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise Returns false
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // store object1 keys as array
  const keys2 = Object.keys(object2); // store object2 keys as array
  let matchFlag = false;
  if (keys1.length !== keys2.length ) { // case: check if objects are the same length
    return false; // return false if objects aren't same length
  } else {
    for (let key of keys1) { // get the keys from any object
      if (!object2.hasOwnProperty(key)) { // if key from object1 doesnt match key from object2 return false
        return false; // if no property, return false
        } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // check if the key is an array
          if (eqArrays(object1[key], object2[key]) === false) {
            return false;
          }
          } else if (object1[key] !== object2[key]) { // both objects should have the key, check if values are the same
          return false; // if values don't match return false
          } else {

          }
    }
    return true;
  }
};
// Test Case: Same keys and values in different positions
const shirtObject = {colour: "red", size: "medium"};
const anotherShirtObject = {size: "medium", colour: "red"};
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// Test Case: One object is longer than the other
const longSleeveShirtObject = {size: "medium", colour: "red", sleeveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// Test Case: Same keys, different values
const catColourObject = {theo: "grey", marlo: "dark grey"};
const catSizeObject = {theo: "medium", colour: "small"};
assertEqual(eqObjects(catColourObject, catSizeObject), false);

// Test Case: Empty object vs non-empty object
const emptyObject = {};
const notEmptyObject = {theo: "medium", colour: "small"};
assertEqual(eqObjects(emptyObject, notEmptyObject), false);

// Test Case: Object has array values
const multiColorShirtObject = { colors: ["red", "blue"], size: ["medium", "small"]};
const anotherMultiColorShirtObject = { size: ["small", "medium"], colors: ["blue", "red"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), false);
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);