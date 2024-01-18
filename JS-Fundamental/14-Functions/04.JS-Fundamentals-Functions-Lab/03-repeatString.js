
function repeatString(string, times) {
    let newString = "";

    for (let i = 0; i < times; i++) {
        newString += string;
    }
    return newString;
}
console.log(repeatString("hello", 5));
console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));

