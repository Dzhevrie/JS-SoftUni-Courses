// Напишете функция, която получава две числа и принтира  на конзолата, всички числа в диапазона, които се делят на 9 без остатък, както и тяхната сума.  На първия ред отпечатайте сумата на числата, а на следващите редове отговарящите на условието числа.
function numbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let output = '';

    for (let index = start; index <= end; index++) {
        if (index % 9 === 0) {
            sum = sum + index;
            output += `${index}\n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(output);
}
numbersDivisibleBy9(["100", "200"]);