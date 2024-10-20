/**
* Function takeUntil() slices the beginning of an array until a callback is truthy.
*
* @param {Array} array - The array to iterate over.
* @param {Function} callback -A function that is called on each element.
*
* @returns {Array} results - array containing the elements of the first array until the callback returns truthy.
*
**/
const takeUntil = (array, callback) => {
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;