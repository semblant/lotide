//psuedocode
//1. take in 2 arrays
//2. for value in itemsToRemove {check if source[value] exists}
//3. for value in source {check if itemToRemove[value] !== source[value] at any index}
//    3a. if not contained in source array, push source[value] to newArr
//4. return newArr


// Function takes in 2 arrays and returns the first array without the 2nd arrays items
const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let val of source) { // check each element of source array
    let found = false; // flag to check if element from source array is in itemsToRemove array
    for (let item of itemsToRemove) { // check each element of itemsToRemove array
      if (item === val) {
        found = true; // if item is in source exists in itemsToRemove, set flag to true
        break; // break early to avoid redundant iterations
      }
    }
    if (!found) { // if flag is false
      newArr.push(val); // add the non-matching values to newArr
    }
  }
  return newArr;
};

module.exports = without;