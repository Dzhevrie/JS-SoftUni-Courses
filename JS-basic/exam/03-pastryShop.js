// С наближаването на коледните и новогодишни празници сладкарница започва записване на поръчки за изработка на сладкиши, като предлага следния ценоразпис и отстъпки според датата на която е направена поръчката. 
// 	                    Торта 	    Суфле	        Баклава
// До 15 декември	24 лв./бр.	    6.66 лв./бр.	12.60 лв./бр.
// След 15 декември	28.70 лв./бр.	9.80 лв./бр.	16.98 лв./бр.
// До 22 декември включително съществуват следните отстъпки, които се прилагат в следния ред: 
// •	При поръчка от 100 лв. до 200 лв. -> 15% отстъпка
// •	При поръчка над 200 лв. -> 25% отстъпка
// •	До 15 декември включително -> 10% допълнителна отстъпка от крайната цена
// Вход
// От конзолата се четат 3 реда:
// 1.	Сладкиш - текст - "Cake", "Souffle" или "Baklava"
// 2.	Брой на поръчаните сладкиши - цяло число в интервала [1 … 10000]
// 3.	Ден от месец декември преди Коледа - цяло число в интервала [1 … 24]
// Изход
// На конзолата се отпечатва 1 ред:
// •	Цената, която трябва да се заплати, форматирана до втория знак след десетичната запетая

function pastryShop(input) {
    let pastry = input[0];
    let orderCount = Number(input[1]);
    let dayRemined = Number(input[2]);
    let price = 0;

    if (dayRemined <= 15)
        switch (pastry) {
            case "Cake": price = orderCount * 24;
                break;
            case "Souffle": price = orderCount * 6.66;
                break;
            case "Baklava": price = orderCount * 12.60;
                break;
        } else {
        switch (pastry) {
            case "Cake": price = orderCount * 28.70;
                break;
            case "Souffle": price = orderCount * 9.80;
                break;
            case "Baklava": price = orderCount * 16.98;
                break;
        }
    }
    if (dayRemined <= 22) {
        if (price >= 100 && price <= 200) {
            price *= 0.85;
        } else if (price > 200) {
            price *= 0.75;
        }
    }

    if (dayRemined <= 15) {
        price = price * 0.90;
    }
    console.log(price.toFixed(2));
}

pastryShop(["Souffle",
    "20",
    "24"]);