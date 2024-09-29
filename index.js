// index.js

// Method 1: Add two numbers
const add = (a, b) => a + b;

// Method 2: Subtract two numbers
const subtract = (a, b) => a - b;

// Method 3: Multiply two numbers
const multiply = (a, b) => a * b;

// Method 4: Divide two numbers
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
};

// Method 5: Find the maximum of two numbers
const max = (a, b) => (a > b ? a : b);

// Method 6: Square a number
const square = (x) => x * x; // Add square function

// Exporting all functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    max,
    square // Include square
};
