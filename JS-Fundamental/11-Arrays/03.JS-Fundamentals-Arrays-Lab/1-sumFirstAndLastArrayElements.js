// Write a function that receives an array of numbers and prints the sum of the first and last element in that array.
function sumFirstAndLastArrayElements(index) {
    let sum = index[0] + index[index.length - 1];
    console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);