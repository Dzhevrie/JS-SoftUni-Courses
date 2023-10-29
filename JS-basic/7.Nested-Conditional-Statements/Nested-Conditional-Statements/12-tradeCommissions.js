// Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:
// Град	0 ≤ s ≤ 500	500 < s ≤ 1 000	1 000 < s ≤ 10 000	s > 10 000
// Sofia	5%	7%	8%	12%
// Varna	4.5%	7.5%	10%	13%
// Plovdiv	5.5%	8%	12%	14.5%
// Напишете функция, която  получава име на град (стринг) и обем на продажби (число) и изчислява и 
// извежда размера на търговската комисионна според горната таблица. Резултатът да се изведе форматиран 
// до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да 
// се отпечата "error". 

function tradeCommissions(input) {
    let city = input[0];
    let sold = Number(input[1]);
    let comissions = 0;

    if (city === "Sofia") {
        if (sold >= 0 && sold <= 500) {
            comissions = sold * 0.05;
        } else if (sold > 500 && sold <= 1000) {
            comissions = sold * 0.07;
        } else if (sold > 1000 && sold <= 10000) {
            comissions = sold * 0.08;
        } else if (sold > 10000) {
            comissions = sold * 0.12;
        }
    }
    if (city === "Varna") {
        if (sold >= 0 && sold <= 500) {
            comissions = sold * 0.045;
        } else if (sold > 500 && sold <= 1000) {
            comissions = sold * 0.075;
        } else if (sold > 1000 && sold <= 10000) {
            comissions = sold * 0.10;
        } else if (sold > 10000) {
            comissions = sold * 0.13;
        }
    }
    if (city === "Plovdiv") {
        if (sold >= 0 && sold <= 500) {
            comissions = sold * 0.055;
        } else if (sold > 500 && sold <= 1000) {
            comissions = sold * 0.08;
        } else if (sold > 1000 && sold <= 10000) {
            comissions = sold * 0.12;
        } else if (sold > 10000) {
            comissions = sold * 0.145;
        }
    }
    if (comissions === 0.00 || !city) {
        console.log("error");
    } else {
        console.log(comissions.toFixed(2));
    }
}
tradeCommissions
    (["Varna",
        "50"])

    ;