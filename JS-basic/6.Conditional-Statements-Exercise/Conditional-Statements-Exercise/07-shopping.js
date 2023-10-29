// Петър иска да купи N видеокарти, M процесора и P на брой рам памет. Ако броя на видеокартите е по-голям 
// от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:
// •	Видеокарта – 250 лв./бр.
// •	Процесор – 35% от цената на закупените видеокарти/бр.
// •	Рам памет – 10% от цената на закупените видеокарти/бр.
// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
// Изход
// На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
// •	Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// •	Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"
// Резултатът да се форматира до втория знак след десетичната запетая.

function shopping(input) {
    let petarsBudget = Number(input[0]);
    let countOfVideocards = Number(input[1]);
    let countOfProcessore = Number(input[2]);
    let countOfRamCashe = Number(input[3]);
    let videocardPrice = countOfVideocards * 250;
    let processorePrice = countOfProcessore * (videocardPrice * 0.35);
    let cashRamPrice = countOfRamCashe * (videocardPrice * 0.10);
    let totalSum = videocardPrice + processorePrice + cashRamPrice;

    if (countOfVideocards > countOfProcessore) {
        totalSum = totalSum - (totalSum * 0.15);
    }

    if (petarsBudget >= totalSum) {
        let diference = petarsBudget - totalSum;
        console.log(`You have ${diference} leva left!`);
    } else {
        let nedeedSum = petarsBudget - totalSum;
        console.log(`Not enough money! You need ${diference} leva more!`);
    }
}
shopping(["920.45",
    "3",
    "1",
    "1"]);