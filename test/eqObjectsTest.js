const eqObjects = require('../eqObjects');
const chai = require('chai');
const assert = chai.assert;

describe("#eqObjects", () => {
  it("returns true when comparing '{colour: 'red', size: 'medium'}' to '{size: 'medium', colour: 'red'}' ", () => {
  // Test Case: Same keys and values in different positions
    const shirtObject = {colour: "red", size: "medium"};
    const anotherShirtObject = {size: "medium", colour: "red"};
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject), true);

  });

  it("returns false when comparing '{colour: 'red', size: 'medium'} to '{size: 'medium', colour: 'red', sleeveLength: 'long'}", () => {
    // Test Case: One object is longer than the other
    const shirtObject = {colour: "red", size: "medium"};
    const longSleeveShirtObject = {size: "medium", colour: "red", sleeveLength: "long"};
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it("returns false when comparing {theo: 'grey', marlo: 'dark grey'} to {theo: 'medium', colour: 'small'}", () => {
    // Test Case: Same keys, different values
    const catColourObject = {theo: "grey", marlo: "dark grey"};
    const catSizeObject = {theo: "medium", colour: "small"};
    assert.isFalse(eqObjects(catColourObject, catSizeObject), false);
  });
  it("returns false when comparing an empty object to a non-empty object", () => {
    // Test Case: Empty object vs non-empty object
    const emptyObject = {};
    const notEmptyObject = {theo: "medium", colour: "small"};
    assert.isFalse(eqObjects(emptyObject, notEmptyObject), false);
  });

  it("returns false when comparing { colors: ['red', 'blue'], size: ['medium', 'small'] } to { size: ['small', 'medium'], colors: ['blue', 'red'] }", () => {
    // Test Case: Object has array values
    const multiColorShirtObject = { colors: ["red", "blue"], size: ["medium", "small"]};
    const anotherMultiColorShirtObject = { size: ["small", "medium"], colors: ["blue", "red"] };
    assert.isFalse(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), false);
  });

  it("returns false when comparing { colors: ['red', 'blue'], size: ['medium', 'small'] } to { size: 'medium' colors: ['red', 'blue'], sleeveLength: 'long', }", () => {
    // Test Case: Object has array values
    const multiColorShirtObject = { colors: ["red", "blue"], size: ["medium", "small"]};
    const longSleeveMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
      sleeveLength: "long",
    };
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });

});







