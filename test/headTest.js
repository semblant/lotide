const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5); // Test Case: Checking if first element is 5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Test case: checking if first element is 'Hello'
assertEqual(head(['&','@','$']), '&'); // Test case: checking if first element is & - how does the function handle symbols
assertEqual(head([]), undefined); // Test case: checking that an empty array returns undefined
assertEqual(head([6, 7, 8]), 5); // Test Case: Ensuring that if the first element isn't 5, it fails