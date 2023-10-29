
function experienceGaining(input) {
    let neededExperience = input[0];
    let countOfBattles = input[1];
    let gainBatels = 0;
    let battelCounter = 0;

    for (let index = 2; index < input.length; index++) {
        let earnedPoints = input[index];
        battelCounter++;

        if (battelCounter % 3 === 0) {
            earnedPoints += earnedPoints * 0.15;
        } else if (battelCounter % 5 === 0) {
            earnedPoints -= earnedPoints * 0.10;
        } else if (battelCounter % 15 === 0) {
            earnedPoints += earnedPoints * 0.05;
        }
        gainBatels += earnedPoints;

        if (gainBatels >= neededExperience) {
            console.log(`Player successfully collected his needed experience for ${battelCounter} battles.`);
            return;
        }
    }

    let neededMoreExp = neededExperience - gainBatels;
    console.log(`Player was not able to collect the needed experience, ${neededMoreExp.toFixed(2)} more needed.`);

}
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20]);

// Output: Player successfully collected his needed experience for 5 battles.
