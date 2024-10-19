// psuedo code
// 1. Find the value given by the callback in the object
//    1a. callback will be like ex. => [starName].star === 2
// 2. Loop through the keys to get the [starName]
//    2a. Ex. for 'blue hill' ... for 'Akaleri' ... for 'noma'
// 3. Ex. if on 'blue hill' check if that value matches the callback?
//    3a. if it does match, return the key
//    3b. else keep searching for the value



/**
 * The findKey function iterates through the keys of an object and returns the
 * first key for which the provided callback function returns a truthy value.
 *
 * @param {Object} object - The object to search through.
 * @param {Function} callback - A function that is called for each value of the object.
 *                              The callback should return a truthy value for the key
 *                              to be returned.
 *
 * @returns {string|undefined} - The first key that satisfies the condition in the
 *                               callback function, or undefined if no key is found.
 **/
const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
};


module.exports = findKey;
