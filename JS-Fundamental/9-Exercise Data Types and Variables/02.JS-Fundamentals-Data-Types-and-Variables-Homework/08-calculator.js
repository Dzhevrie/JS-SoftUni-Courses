// Write a function that receives 3 parameters: a number, an operator (string), and another number.
// The operator can be:  '+', '-', '/', '*'. Print the result of the calculation on the console formatted to the second decimal point.

function calculator(fNum, operator, secNum) {
    let result;
    switch (operator) {
        case "+": result = fNum + secNum;
            break;
        case "-": result = fNum - secNum;
            break;
        case "/": result = fNum / secNum;
            break;
        case "*": result = fNum * secNum;
            break;
    }
    console.log(result.toFixed(2));
}
calculator(5, '+', 10);
