/*
Function middle(): takes an array and returns the middle number(s) as an array
* Checks if the length has three elements, returns an empty array.
* Checks for even numbered arrays, returns the two middle elements as an array.
* Checks for odd numbered arrays, returns the middle element as an array.
*/
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