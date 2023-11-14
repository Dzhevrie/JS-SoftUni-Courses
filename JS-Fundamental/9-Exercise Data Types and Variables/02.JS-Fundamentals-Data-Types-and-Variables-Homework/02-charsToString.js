// Write a function, which receives 3 parameters. Each parameter is a single character. Combine all the characters into one string and print it on the console.
function charsToString(arr1, arr2, arr3) {
    let res = [arr1, arr2, arr3];
    console.log(res.join(""));

}
charsToString('a', 'b', 'c');