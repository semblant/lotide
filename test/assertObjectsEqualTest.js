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

  it("assertion fails when comparing {theo: 'grey', marlo: 'dark grey'} to {theo: 'medium', colour: 'grey'}", () => {
    // Test Case: Same keys, different values => should FAIL
    const catColourObject = {theo: "grey", marlo: "dark grey"};
    const catSizeObject = {theo: "medium", colour: "grey"};
    assertObjectsEqual(catColourObject, catSizeObject);
  });

  it("assertion fails when comparing {theo: 'grey', marlo: ['grey', 'white']} to {theo: 'medium', colour: ['white', 'grey']}", () => {
    // Test Case: Same keys, different values => should FAIL
    const catColourObject = {theo: 'grey', marlo: ['grey', 'white']};
    const catSizeObject = {theo: 'medium', colour: ['white', 'grey']};
    assertObjectsEqual(catColourObject, catSizeObject);
  });

  it("should assert equal when both objects are empty", () => {
    // Test Case: Object has array values
    const multiColorShirtObject = { };
    const anotherMultiColorShirtObject = { };
    assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
  });

});

