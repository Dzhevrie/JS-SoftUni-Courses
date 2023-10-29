// Лили вече е на N години. За всеки свой рожден ден тя получава подарък. 
// •	За нечетните рождени дни (1, 3, 5...n) получава играчки.
// •	За четните рождени дни (2, 4, 6...n) получава пари. 
// За втория рожден ден получава 10.00 лв, като сумата се увеличава с 10.00 лв., за всеки следващ четен рожден ден (2 -> 10, 4 -> 20, 6 -> 30...и т.н.). През годините Лили тайно е спестявала парите. Братът на Лили, в годините, които тя получава пари, взима по 1.00 лев от тях. Лили продала играчките получени през годините, всяка за P лева и добавила сумата към спестените пари. С парите искала да си купи пералня за X лева. Напишете програма, която да пресмята, колко пари е събрала и дали ѝ стигат да си купи пералня.

function cleverLily(input) {
    let age = Number(input[0]);
    let wasmashinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let moneySasved = 0;
    let moneyGiven = 10;

    for (i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            moneySasved += pricePerToy;
        } else {
            moneySasved += (moneyGiven - 1);
            moneyGiven += 10;
        }
    }

    if (moneySasved >= wasmashinePrice) {
        let moneyLeft = moneySasved - wasmashinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = wasmashinePrice - moneySasved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

cleverLily(["10",
"170.00",
"6"])
;