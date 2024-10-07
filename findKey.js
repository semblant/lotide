/*
* Function assertEqual(): compares 2 given arguments, console logs if the assertion passed or failed.
* Arguments could be objects, arrays, strings, number, etc.
* Parameters: any, any
* Returns: no return value
*/
const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};


// psuedo code
// 1. Find the value given by the callback in the object
//    1a. callback will be like ex. => [starName].star === 2
// 2. Loop through the keys to get the [starName]
//    2a. Ex. for 'blue hill' ... for 'Akaleri' ... for 'noma'
// 3. Ex. if on 'blue hill' check if that value matches the callback?
//    3a. if it does match, return the key
//    3b. else keep searching for the value

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// Test Case: ensure the code is working.
// This test ensures that the callback is correctly applied to the object.
const stars = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
const starsResults = findKey(stars, (x) => x.stars === 2);
assertEqual(starsResults, 'noma');

// Test Case: ensure empty object and empty callback returns undefined
const testObj = {

};
findKey(testObj, '');
assertEqual(testObj.key, undefined);

