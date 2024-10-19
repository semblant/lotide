/*
* Function flatten(): takes a nested array and turns it into a non-nested array - "flat array".
* Uses nested loops to push all items to flatArray.
*
* pseudocode
*  1. take 1 array of arrays
*  2. let flatArr = [] // to store values of each array in.
*  2. for outer array, {loop through each inner array}
*  3. for value of arr[n]{push to flatArr}
*/
const flatten = function(array) {
  const flatArr = [];
  for (let arr of array) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        flatArr.push(arr[i]);
      }
    } else {
      flatArr.push(arr);
    }
  }
  return flatArr;
};

module.exports = flatten;
