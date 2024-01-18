// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions

function simpleCalculator(fn, sn, operator) {
    return {
        'add': (fn, sn) => fn + sn,
        'subtract': (fn, sn) => fn - sn,
        'multiply': (fn, sn) => fn * sn,
        'divide': (fn, sn) => fn / sn
    }[operator](fn, sn);

}
console.log(simpleCalculator(5,
    5,
    'multiply'));
console.log(simpleCalculator(40,
    8,
    'divide'));
console.log(simpleCalculator(12, 19,
    'add'));
console.log(simpleCalculator(50,
    13,
    'subtract'));