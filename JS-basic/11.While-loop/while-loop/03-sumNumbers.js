
function sumNumbers(input) {
    let firstNum = Number(input[0]);
    let index = 1;
    let otherNyms = Number(input[index]);
    // let sum += index;
    let sum = 0;

    while (sum < firstNum) {
        sum += otherNyms;
        index++;
        otherNyms = Number(input[index]);
    }
    console.log(sum);
}
sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"]);