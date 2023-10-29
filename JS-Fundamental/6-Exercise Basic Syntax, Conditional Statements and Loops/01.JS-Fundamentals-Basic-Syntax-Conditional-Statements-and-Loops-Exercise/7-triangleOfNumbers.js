// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
// Constraints
// ·	n will be in the interval [1...20].

function triangleOfNumbers(maxRow) {
    for (let num = 1; num <= maxRow; num++) {
        console.log(`${num} `.repeat(num));
    }
}

// triangleOfNumbers(3);
// triangleOfNumbers(5);
triangleOfNumbers(6);
