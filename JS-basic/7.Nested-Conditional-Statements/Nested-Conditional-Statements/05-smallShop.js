// Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според
//  града:
// град / продукт	coffee	water	beer	sweets	peanuts
// Sofia	0.50	0.80	1.20	1.45	1.60
// Plovdiv	0.40	0.70	1.15	1.30	1.50
// Varna	0.45	0.70	1.10	1.35	1.55
// Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число), 
// и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. 

function smallShop(input) {
    let productName = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    if (city === "Sofia") {
        switch (productName) {
            case "coffee": price = quantity * 0.50; break;
            case "water": price = quantity * 0.80; break;
            case "beer": price = quantity * 1.20; break;
            case "sweets": price = quantity * 1.45; break;
            case "peanuts": price = quantity * 1.60; break;
        }
    } else if (city === "Plovdiv") {
        switch (productName) {
            case "coffee": price = quantity * 0.40; break;
            case "water": price = quantity * 0.70; break;
            case "beer": price = quantity * 1.15; break;
            case "sweets": price = quantity * 1.30; break;
            case "peanuts": price = quantity * 1.50; break;
        }
    } else if (city === "Varna") {
        switch (productName) {
            case "coffee": price = quantity * 0.45; break;
            case "water": price = quantity * 0.70; break;
            case "beer": price = quantity * 1.10; break;
            case "sweets": price = quantity * 1.35; break;
            case "peanuts": price = quantity * 1.55; break;
        }
    }
    console.log(price);
}
smallShop(["coffee",
    "Varna",
    "2"]);
