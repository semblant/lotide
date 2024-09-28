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

assertEqual(head([5, 6, 7]), 5); // compare identical nums
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // compare identical strings
assertEqual(head([0,1,2]), 8); // compare non-identical nums
assertEqual(head(["Hello"]), "Bootcamp"); // compare 1-element array to non-identical string
assertEqual(head(["Hello", "Lighthouse", "Labs"]), ""); // compare array to empty string
assertEqual(head([]), 5); // compare empty array to num
assertEqual(head([]), ""); // compare empty array to empty string