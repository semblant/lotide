const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the function findKeyByValue which takes in an object and a value.
// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.
//psuedocode
// 1. loop through the given obj
//    1a. for (let item in obj) -- maybe we need indeces??? idk yet
// 2. If value === obj[key] return key -- could be multiple keys if the value repeated

const findKeyByValue = function(obj, value) {
  for (let item in obj) { // get keys of object
    if (value === obj[item]) { // check if given value is equal to object value
      return item; // return key
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "    "), undefined);


// Test Case: ensure original object is unchanged.
const testObj = {
  test: "for",
  find: "keys",
  by: "value",
};
findKeyByValue(testObj, "for");
assertEqual(testObj.test, "for");