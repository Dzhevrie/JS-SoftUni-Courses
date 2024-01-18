// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
// •	If the result is positive, print on the console -> "Positive"
// •	Otherwise, print -> "Negative"

function checkProductSign(numOne, numTwo, numThree) {
    // Count the number of negative numbers
    let negativeCount = 0;

    // Check the sign of each number
    if (numOne < 0) {
        negativeCount++;
    }
    if (numTwo < 0) {
        negativeCount++;
    }
    if (numThree < 0) {
        negativeCount++;
    }

    // Determine the sign of the product based on the number of negative numbers
    if (negativeCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

checkProductSign(5,
    12,
    -15);
checkProductSign(-6,
    -12,
    14);
checkProductSign(-1,
    -2,
    -3);
checkProductSign(-5,
    1,
    1);
