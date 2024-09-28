const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5); // Test Case: Checking if first element is 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Test case: checking if first element is 'Hello'
assertEqual(head([0,1,2]), 8); // Test case: checking if first element is 8
assertEqual(head(["Hello"]), "Bootcamp"); // Test case: checking if first element is 'Bootcamp'
assertEqual(head(["Hello", "Lighthouse", "Labs"]), ""); // Test case: checking if first element is empty string ""
assertEqual(head([]), 5); // Test Case: checking if first element of an empty array is 5
assertEqual(head([]), ""); // Test case: checking if first element in empty array is an empty string ""