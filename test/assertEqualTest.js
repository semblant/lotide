const assertEqual = require('../assertEqual');

assertEqual('Hello', 'Hello'); // Test Case: checking if two strings match
assertEqual('Hello', 'Lighthouse'); // Test Case: ensuring that two different strings don't match
assertEqual(2, 2); // Test Case: checking if two numbers match
assertEqual(2, '2'); // Test Case: ensuring that two different types don't match
