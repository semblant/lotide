// countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

const assertEqual = function(actual, expected) {
  // actual is now an object
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function: contOnly() takes an array and object and returns counts of everything th object listed.
// Paramters:
//          Array: contains strings the function searches through
//          Object: specifying what to count
// Returns: Object

//psueodcode
// 1. search through itemsToCount to see what keys we need.
// 2. if itemsToCount.value === true, and itemsToCount === allItems;
// 3. push key-value pair
// --- not sure how to handle cases with multiple of the same key-value pair
const countOnly = function(allItems, itemsToCount) {
  let countResult = {};
  for (let item in itemsToCount) {
    let count = 0; // count for # of occurences
    if (itemsToCount[item]) {
      // if true, then count occurences in allItems
      for (let key of allItems) {
        // loop through allItems to count each value
        if (key === item) {
          // if the string in allItems is in itemsToCount, count it
          count += 1;
          countResult[item] = count; // this might create more than one instance of the same key-value pair

        }
      }
    }
  }
  return countResult;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// Test Cases: all should PASS
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);