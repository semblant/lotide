/**
* Function map(): creates a new array based on a callback function.
* @param {Array} array - The  array to be mapped over.
* @param {Function} callabck -A function that will be called on each element of the array.
*
* @returns{Array} results - new array containing results applying the callback on each element.
**/
const map = (array, callback) => {
  const results = []; // create array to store results
  for (let item of array) {
    results.push(callback(item));
  }
  return results; // return results
};

module.exports = map;
