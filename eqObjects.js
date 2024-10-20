const eqArrays = require('./eqArrays');

/**
 * The eqObjects function compares two objects and returns a boolean indicating
 * whether the objects are equal.
 *
 * @param {Object} object1 - The first object to compare.
 * @param {Object} object2 - The second object to compare.
 *
 * @returns {boolean} - Returns true if both objects are equal, otherwise false.
 *
 **/
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // store object1 keys as array
  const keys2 = Object.keys(object2); // store object2 keys as array
  if (keys1.length !== keys2.length) return false; // return false if object key arrays are not same length
  else {
    for (let key of keys1) { // get the keys from any object
      if (!object2[key]) return false; // if key from object1 doesnt match key from object2 return false
      else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // check if the key is an array
        if (eqArrays(object1[key], object2[key]) === false) return false;
      } else if (object1[key] !== object2[key]) return false; // both objects should have the key, check if values are the same
      return true;
    }
  }
};

module.exports = eqObjects;