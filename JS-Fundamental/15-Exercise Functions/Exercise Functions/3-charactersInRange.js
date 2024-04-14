// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. Keep in mind that the second character code might be before the first one inside the ASCII table.
function charactersInRange(char1, char2) {
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    let result = " ";
    for (let i = startChar + 1; i < endChar; i++) {
        result += String.fromCharCode(i) + " ";
    }
    return result;
}
console.log(charactersInRange('a',
    'd'));
console.log(charactersInRange('#',
    ':'));
console.log(charactersInRange('C',
    '#'));
