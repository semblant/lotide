//psuedocode
// 1. for each key in the object
// 2. If value === obj[key] return key

/**
 * The findKeyByValue function searches for the first key in an object that
 * corresponds to a given value.
 *
 * @param {Object} obj - The object to search through.
 * @param {*} value - The value to search for within the object's values.
 *
 * @returns {string|undefined} - The first key that matches the provided value,
 *                               or undefined if no matching key is found.
**/
const findKeyByValue = function(obj, value) {
  for (let item in obj) { // get keys of object
    if (value === obj[item]) { // check if given value is equal to object value
      return item; // return key
    }
  }
};


module.exports = findKeyByValue;
