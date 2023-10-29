// Напишете функция, която получава  две цели числа (N1 и N2) и оператор, с който да се извърши дадена математическа операция с тях. Възможните операции са: Събиране(+), Изваждане(-), Умножение(*), Деление(/) и Модулно деление(%). При събиране, изваждане и умножение на конзолата трябва да се отпечатат резултата и дали той е четен или нечетен. При обикновеното деление – резултата. При модулното деление – остатъка. Трябва да се има предвид, че делителят може да е равен на 0(нула), а на нула не се дели. В този случай трябва да се отпечата специално съобщениe.
// Вход
// Приемат се 3 аргумента,:
// •	N1 – цяло число в интервала [0...40 000]
// •	N2 – цяло число в интервала [0...40 000]
// •	Оператор – един символ измежду: "+", "-", "*", "/", "%"
// Изход
// Да се отпечата на конзолата един ред:
// •	Ако операцията е събиране, изваждане или умножение:
// o	 "{N1} {оператор} {N2} = {резултат} – {even/odd}"
// •	Ако операцията е деление:
// o	"{N1} / {N2} = {резултат}" – резултатът е форматиран до вторият знак след дес.запетая
// •	Ако операцията е модулно деление: 
// o	"{N1} % {N2} = {остатък}"
// •	В случай на деление с 0(нула): 
// o	"Cannot divide {N1} by zero"

function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let oddOrEven = 0;

    if (operator === "+") {
        result = n1 + n2;
        if (result % 2 === 0) {
            oddOrEven = "even";
        } else {
            oddOrEven = "odd";
        }
        console.log(`${n1} + ${n2} = ${result} - ${oddOrEven}`);
    }
    if (operator === "-") {
        result = n1 - n2;
        if (result % 2 === 0) {
            oddOrEven = "even";
        } else {
            oddOrEven = "odd";
        }
        console.log(`${n1} - ${n2} = ${result} - ${oddOrEven}`);
    }
    if (operator === "*") {
        result = n1 * n2;
        if (result % 2 === 0) {
            oddOrEven = "even";
        } else {
            oddOrEven = "odd";
        }
        console.log(`${n1} * ${n2} = ${result} - ${oddOrEven}`);
    }
    if (operator === "/") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        }
    }
    if (operator === "%") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
        }
    }
}
operationsBetweenNumbers(["10",
    "0",
    "%"])

    ;