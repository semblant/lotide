//psueodcode
// 1. search through itemsToCount to see what keys we need.
// 2. if itemsToCount.value === true, and itemsToCount === allItems;
// 3. push key-value pair

/** Function: contOnly() takes an array and object and returns counts of everything th object listed.
*
* @param {Array} allItems - contains strings the function searches through
* @param {Array} itemsToCount - specifying what to count
*
* @returns {Object} - Object that contains the number of times a specified keys occurs
*
**/

const countOnly = function(allItems, itemsToCount) {
  let countResult = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      // if true, then count occurences in allItems
      for (let key of allItems) {
        // loop through allItems to count each value
        if (key === item) {
          // if the string in allItems is in itemsToCount, count it
          if (!countResult[item]) {
            countResult[item] = 0;
          }
          countResult[item] += 1;
        }
      }
    }
  }
  return countResult;
};

module.exports = countOnly;