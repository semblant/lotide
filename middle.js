/**
* Function middle(): takes an array and returns the middle number(s) as an array
*
* @param {Array} arr - the input array to get the middle element from.
*
* @returns {Array} midArr - returns either one element for an even array, 2 elements for an odd array, or an empty array for array with 2 or less elements.
**/
const middle = function(arr) {
  let midArr = [];
  if (arr.length <= 2) { // return empty if 2 or less elements
    return midArr;
  } else if (arr.length % 2 === 0) { // check if the array is even numbered
    let middleInd = arr.length / 2; // get the index at halfway
    midArr.push(arr[middleInd - 1]); // push the index before halfway to account for the 0th element
    midArr.push(arr[middleInd]); // halfway index
  } else {
    let middleInd = Math.floor(arr.length / 2); // get the index at halfway rounded down (middle element)
    midArr.push(arr[middleInd]);
  }
  return midArr;
};

module.exports = middle;