function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    let shieldBrokenCount = 0;

    for (let i = 1; i <= lostFightCount; i++) {
        if (i % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (i % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            totalExpenses += shieldPrice;
            shieldBrokenCount++;

            if (shieldBrokenCount % 2 === 0) {
                totalExpenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
// Output: Gladiator expenses: 16.00 aureus
