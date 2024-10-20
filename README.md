# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @flakycrust/lotide`

**Require it:**

`const _ = require('@flakycrust/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: compares two arrays and logs a message indicating whether they are equal.
- `assertEqual`:  compares two values and logs a message indicating whether they are equal.
- `assertObjectsEqual`: compares two objects and logs a message indicating whether they are equal.
- `countLetters`: takes in a string and counts each letter, returns the count of each letter as an object.
- `countOnly`: takes an array and object and returns counts of everything in the array that the object listed.
- `eqArrays`: compares each value in 2 arrays, returns true if they're the same, false if not.
- `eqObjects`: compares each value in 2 objects, returns true if they're the same, false if not.
- `findKey`: iterates through the keys of an object and, using a callback function, returns the first key that is truthy.
- `findKeyByValue`: searches for the first key in an object that corresponds to a given value.
- `flatten`: takes a nested array and turns it into a flat array.
- `head`: returns the first item in a given array.
- `letterPositions`: takes a sentence and returns the positions/indeces of each letter as an array.
- `map`: creates a new array based on a callback function.
- `middle`: takes an array and returns the middle number(s) as an array.
- `tail`: returns the last item in a given array
- `takeUntil`: slices the beginning of an array until a callback is truthy.
- `without`: takes in 2 arrays and returns the first array without the 2nd arrays items.