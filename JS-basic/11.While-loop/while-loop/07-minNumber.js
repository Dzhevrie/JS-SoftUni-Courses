
function minNumber(input) {
    let minSymbol = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let num = input[index];

    while (num !== "Stop") {
        let curSymbol = Number(num);
        if (curSymbol < minSymbol) {
            minSymbol = curSymbol;
        }
        index++;
        num = input[index];
    }
    console.log(minSymbol);
}
minNumber(["100",
    "99",
    "10",
    "70",
    "Stop"]);