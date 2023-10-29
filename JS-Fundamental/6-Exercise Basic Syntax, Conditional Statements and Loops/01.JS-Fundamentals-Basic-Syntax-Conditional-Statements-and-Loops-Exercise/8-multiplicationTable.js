// You will receive a number as a parameter. Print the 10 times table for this number. See the examples below for more information.
// Output
// Print every row of the table in the following format:
// {number} X {times} = {product}
// Constraints
// ·	The number will be an integer will be in the interval [1…100]

function multiplicationTable(qounter) {
    for (let num = 1; num <= 10; num++) {
        let sum = qounter * num;
        console.log(`${qounter} X ${num} = ${sum}`);
    }
}
multiplicationTable(5);
multiplicationTable(2);
