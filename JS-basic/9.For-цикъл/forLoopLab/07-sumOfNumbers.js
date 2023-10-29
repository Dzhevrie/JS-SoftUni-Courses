// Напишете функция, която получава цяло число n, сумира всички негови цифри и отпечатва сумата. 
// Вход
// Функцията получава число n.
// Изход
// Да се отпечата на конзолата един ред:
// "The sum of the digits is:{sum}" – където sum е сумата на отделните цифри.

function sumOfNumbers(input) {
    let num = input.toString();
    let sum = 0;

    for (let index = 0; index < num.length; index++) {
        let currentNum = Number(num[index]);
        sum = sum + currentNum;

    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(564891);