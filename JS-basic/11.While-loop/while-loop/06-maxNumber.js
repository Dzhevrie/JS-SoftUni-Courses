
function maxNumber(input) {
    let maxSymbol = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let num = input[index];

    while (num !== "Stop") {
        let curSymbol = Number(num);
        if (curSymbol > maxSymbol) {
            maxSymbol = curSymbol;
            // console.log(maxSymbol);
        }
        index++;
        num = input[index];
    }
    console.log(maxSymbol);
}
maxNumber(["100",
    "99",
    "180",
    "70",
    "Stop"]);