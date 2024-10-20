// psuedo code
// for each key of stars
//    2a. Ex. for 'blue hill' ... for 'Akaleri' ... for 'noma'
// 3. if object[key] is true, callback on object[key]
//    3b. else keep searching for the value

/**
 * The findKey function iterates through the keys of an object and, using a callback function, returns the first key that is truthy.
 *
 * @param {Object} object - The object to search through.
 * @param {Function} callback - A function that is called for each value of the object. Should return truthy for the value to be returned.
 *
 * @returns {string|undefined} - The first key that satisfies the condition in the callback.
 *
 **/
const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
};


module.exports = findKey;
