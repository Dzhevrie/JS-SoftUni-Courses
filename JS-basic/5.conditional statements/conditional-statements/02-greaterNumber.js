// Да се напише функция, която получава две цели числа и отпечатва по-голямото от двете


function greaterNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    if (firstNumber > secondNumber) {
        console.log(firstNumber);
    } else {
        console.log(secondNumber);
    }
}
greaterNumber(["5", "3"]);