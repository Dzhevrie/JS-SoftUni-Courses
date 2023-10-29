// Да се напише функция, която получава число n и печата четните степени на 2 ≤ 2n: 20, 22, 24, 26, …, 2n.
function evenPowersOf2(input) {
    for (let index = 0; index <= input[0]; index = index + 2) {
        console.log(Math.pow(2, index));
    }
}
evenPowersOf2(["7"]);