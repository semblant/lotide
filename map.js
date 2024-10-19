/*
* Function map(): creates a new array based on a callback function
* Parameters: array, callback function
* Return Value: new array
*/
const map = (array, callback) => {
  const results = []; // create array to store results
  for (let item of array) {
    results.push(callback(item));
  }
  return results; // return results
};

module.exports = map;
