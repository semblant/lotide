const map = require('../map');
const chai = require('chai');
const assert = chai.assert;


describe("#map", () => {
  it("should correctly apply the callback function: (word) => word[0]", () => {
    // This test ensures that the map function correctly applies the callback to each element in the array
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });

  it("should properly apply a different callback function: (word) => word.length", () => {
    // This test ensures the map function works with a callback function that counts the length of each item in array
    const candy = ['chocolate', 'gummy bears', 'sucker'];
    const resultsCandy = map(candy, word => word.length);
    assert.deepEqual(resultsCandy, [9, 11, 6]);
  });

  it("returns an empty array when given an empty array", () => {
    // Test Case: Empty array
    const empty = [];
    const emptyResults = map(empty, word => word[0]);
    assert.deepEqual(emptyResults, []);
  });

  it("should ensure the original array isn't changed after function is applied", () => {
    // This test ensures that the map function doesn't change the original array
    const cats = ['theo', 'marlo', 'midna', 'gigi', 'norm'];
    map(cats, word => word[0]);
    assert.deepEqual(cats, ['theo', 'marlo', 'midna', 'gigi', 'norm']);
  });

});