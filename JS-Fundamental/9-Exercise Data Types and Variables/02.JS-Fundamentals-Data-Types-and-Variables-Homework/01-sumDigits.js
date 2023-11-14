// Write a function, which will be given a single number. Your task is to find the sum of its digits.
function sumDigits(num) {
    let numString = num.toString();
    let sum = 0;
    for (i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    console.log(sum);
}
sumDigits(97561);