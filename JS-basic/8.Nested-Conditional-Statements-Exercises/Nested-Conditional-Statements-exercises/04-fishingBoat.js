// Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб. Цената за наемане на кораба зависи от сезона и броя рибари.
// Цената зависи от сезона:
// В зависимост от броя си групата ползва отстъпка:
// •	Ако групата е до 6 човека включително  –  отстъпка от 10%.
// •	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// •	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
// Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
// Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 
// Изход
// Да се отпечата на конзолата един ред:
// •	Ако бюджетът е достатъчен:
// "Yes! You have {останалите пари} leva left."
// •	Ако бюджетът НЕ Е достатъчен:
// "Not enough money! You need {сумата, която не достига} leva."
// Сумите трябва да са форматирани с точност до два знака след десетичната запетая.

function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFishers = Number(input[2]);
    let boatRent = 0;

    switch (season) {
        case "Spring":
            boatRent = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatRent = 4200;
            break;
        case "Winter":
            boatRent = 2600;
            break;
    }

    if (numberOfFishers <= 6) {
        boatRent *= 0.90;
    } else if (numberOfFishers >= 7 && numberOfFishers <= 11) {
        boatRent *= 0.85;
    } else if (numberOfFishers >= 12) {
        boatRent *= 0.75;
    }

    if (season !== "Autumn" && numberOfFishers % 2 === 0) {
        boatRent *= 0.95;
    }

    if (budget >= boatRent) {
        let moneyLeft = budget - boatRent;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = boatRent - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}
fishingBoat(["2000",
    "Winter",
    "13"]);
    // •	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"