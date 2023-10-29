// Напишете програма, която чете число n, въведено от потребителя и отпечатва всички числа ≤ n от редицата: 1, 3, 7, 15, 31, …. Всяко следващо число се изчислява като умножим предишното с 2 и добавим 1.
function sequence2k(input) {
    let initialNum = Number(input[0]);
    let index = 1;
    let sum = index;


    while (sum <= initialNum) {
        console.log(sum);
        sum = sum * 2 + 1;
        index++;
    }
}
sequence2k(["31"]);