// Напишете функция, която проверява всички възможни комбинации от двойка числа в интервала от две дадени числа. На изхода се отпечатва, коя поред е първата комбинацията, чийто сбор от числата е равен на дадено магическо число. Ако няма нито една комбинация отговаряща на условието се отпечатва съобщение, че не е намерено.
// Вход
// Функцията получава масив от 3 елемента:
// •	Първи – начало на интервала – цяло число в интервала [1...999]
// •	Втори – край на интервала – цяло число в интервала [по-голямо от първото число...1000]
// •	Трети – магическото число – цяло число в интервала [1...10000]
// Изход
// На конзолата трябва да се отпечата един ред, според резултата:
// •	При първата намерена комбинация, чиито сбор на числата е равен на магическото число:
// o	"Combination N:{пореден номер} ({първото число} + {второ число} = {магическото число})"
// •	Ако не е намерена комбинация отговаряща на условието:
// o	"{броят на всички комбинации} combinations - neither equals {магическото число}"

function sumOfTwoNumbers(input) {
    let index = 0;
    let start = Number(input[index]);
    index++;
    let end = Number(input[index]);
    index++;
    let magicNum = Number(input[index]);
    index++;
    let validCounter = 0;
    let isValidComb = false;

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            validCounter++;
            let sum = a + b;
            if (sum === magicNum) {

                console.log(`Combination N:${validCounter} (${a} + ${b} = ${magicNum})`);
                isValidComb = true;
                break;
            }
        }
        if (isValidComb) {
            break;
        }
    }
    if (!isValidComb) {
        console.log(`${validCounter} combinations - neither equals ${magicNum}`);

    }
}
sumOfTwoNumbers(["1",
    "10",
    "5"]);