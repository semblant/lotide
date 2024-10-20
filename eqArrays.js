// pseudocode
////take first array first value and compare with second array first value
//1. for values in arr1 {store value for comparison}
//2. for values in arr2 {store value for comparison}
//3. if values match {result = true}, else {false} go to next iteration


/**
 * The eqArrays function compares each value in 2 arrays, returns true if they're the same, false if not.
 *
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 *
 * @returns {boolean} - Returns true if both arrays are of the same length and
 * all their elements are strictly equal. Otherwise, returns false.
 *
 **/
const eqArrays = (arr1, arr2) => {
  // check if arrays are the same length, else return false.
  if (arr1.length  !== arr2.length) return false; // exit loop if not equal in length

  for (let i = 0; i < arr1.length; i++) {  // only need to loop through arr1.length since they should be the same length
    if (arr1[i] !== arr2[i]) return false; // exit loop if values aren't equal
  }
  return true; // return true after checking all elements
};

module.exports = eqArrays;