// Write a program that takes 3 parameters (characters) and prints them in reversed order with a space between them.
function reversedChars(fl, sl, tl) {
    let word = [fl, sl, tl];
    let revWord = word.reverse();
    console.log(revWord.join(" "));
}
reversedChars('A',
    'B',
    'C'
);
