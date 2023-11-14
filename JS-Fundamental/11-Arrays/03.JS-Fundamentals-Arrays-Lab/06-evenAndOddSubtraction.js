// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
function evenAndOddSubtraction(arr) {
    let sumOdd = 0;
    let sumEven = 0;
    for (i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num % 2 === 0) {
            sumOdd += num;
        } else {
            sumEven += num;
        }
    }
    let difference = sumOdd - sumEven;
    console.log(difference);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
// evenAndOddSubtraction([3, 5, 7, 9]);
// evenAndOddSubtraction([2, 4, 6, 8, 10]);