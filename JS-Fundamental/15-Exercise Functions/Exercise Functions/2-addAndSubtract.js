// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function sum() and the third integer.

function addAndSubtract(a, b, c) {
    let sum = 0;
    let subtract = 0;

    sum = a + b;
    subtract = sum - c;

    console.log(subtract);
}
addAndSubtract(23,
    6,
    10);
addAndSubtract(1,
    17,
    30);
addAndSubtract(
    42,
    58,
    100);
