import multiply, { add, subtract, addAndLogUpper } from './mathmodule.js';
import { toUpperCase, toLowerCase } from './stringmodule.js';
import { findMax, reverseArray } from './arraymodule.js';

// Math tests
console.log('Add: ', add(5, 3));
console.log('Subtract: ', subtract(10, 4));
console.log('Multiply: ', multiply(4, 5));

// String tests
console.log('Uppercase: ', toUpperCase('hello'));
console.log('Lowercase: ', toLowerCase('WORLD'));

// Array tests
console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed: ', reverseArray([1, 2, 3]));

// Use math + string
addAndLogUpper(10, 20);

// Final challenge
const numbers = [2, 8, 3, 7];
const maxVal = findMax(numbers);
const multiplied = multiply(maxVal, 3);
console.log('Final Challenge Result: ', toUpperCase(multiplied.toString()));
