// Write a function that prints whether a given character is upper-case or lower-case.
function lowerOrUpper(char) {
    if (char >= "A" && char <= "Z") {
        console.log("upper-case");
    } else if (char >= "a" && char <= "z") {
        console.log("lower-case");
    } else {
        console.log(`${char} is not a letter`);
    }
}
lowerOrUpper("L");
lowerOrUpper("f");
lowerOrUpper("1");
