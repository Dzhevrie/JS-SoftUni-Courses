// Дадено е цяло число – начален брой точки. Върху него се начисляват бонус точки
//  по правилата, описани по-долу. Да се напише функция, която пресмята бонус 
//  точките, които получава числото и общия брой точки (числото + бонуса).
// •	Ако числото е до 100 включително, бонус точките са 5.
// •	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
// •	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

// •	Допълнителни бонус точки (начисляват се отделно от предходните):
// o	За четно число  + 1 т.
// o	За число, което завършва на 5  + 2 т.

function bonusScore(input) {
    let startBonusPoints = Number(input[0]);
    let bonusPoints = 0;

    if (startBonusPoints <= 100) {
        bonusPoints = 5;
    } else if (startBonusPoints <= 1000) {
        bonusPoints = startBonusPoints * 0.20;
    } else {
        bonusPoints = startBonusPoints * 0.10;
    }

    if (startBonusPoints % 2 === 0) {
        bonusPoints = bonusPoints + 1;
    } else if (startBonusPoints % 10 === 5) {
        bonusPoints = bonusPoints + 2;
    }

    console.log(bonusPoints);
    console.log(startBonusPoints + bonusPoints);
}
bonusScore(["175"]);