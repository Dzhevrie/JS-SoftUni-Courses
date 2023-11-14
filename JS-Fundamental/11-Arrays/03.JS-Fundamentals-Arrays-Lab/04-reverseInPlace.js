// Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array. Print the resulting elements on a single line, space-separated. 
function reverseInPlace(params) {
    for (let i = 0; i < params.length / 2; i++) {
        let j = params.length - 1 - i;

        let temp = params[i];
        params[i] = params[j];
        params[j] = temp;
    }
    console.log(params.join(" "));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);