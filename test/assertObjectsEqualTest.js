const assertObjectsEqual = require('../assertObjectsEqual');
const chai = require('chai');
const assert = chai.assert;

describe("#assertObjectsEqual", () => {
  it("assertion passes when comparing '{colour: 'red', size: 'medium'}' to '{size: 'medium', colour: 'red'}' ", () => {
    // Test Case: Same keys and values in different positions => should PASS
    const shirtObject = {colour: "red", size: "medium"};
    const anotherShirtObject = {size: "medium", colour: "red"};
    assertObjectsEqual(shirtObject, anotherShirtObject);
  });

  it("assertion fails when comparing '{colour: 'red', size: 'medium'} to '{size: 'medium', colour: 'red', sleeveLength: 'long'}", () => {
    // Test Case: One object is longer than the other ==> should FAIL
    const shirtObject = {colour: "red", size: "medium"};
    const longSleeveShirtObject = {size: "medium", colour: "red", sleeveLength: "long"};
    assertObjectsEqual(shirtObject, longSleeveShirtObject);
  });

  it("assertion fails when comparing {theo: 'grey', marlo: 'dark grey'} to {theo: 'medium', colour: 'small'}", () => {
    // Test Case: Same keys, different values => should FAIL
    const catColourObject = {theo: "grey", marlo: "dark grey"};
    const catSizeObject = {theo: "medium", colour: "small"};
    assertObjectsEqual(catColourObject, catSizeObject);
  });

  it("assertion fails when comparing { colors: ['red', 'blue'], size: ['medium', 'small'] } to { size: ['small', 'medium'], colors: ['blue', 'red'] }", () => {
    // Test Case: Object has array values
    const multiColorShirtObject = { colors: ["red", "blue"], size: ["medium", "small"]};
    const anotherMultiColorShirtObject = { size: ["small", "medium"], colors: ["blue", "red"] };
    assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
  });

});

