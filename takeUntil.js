/*
* Function takeUntil() slices the beginning of an array until a callback is truthy.
* Parameters: array, callback function
* Returns: New array
*/
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