// Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine. Your shift consists of a certain number of days where you mine an amount of gold in grams. Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day. You need to check, which day you have enough money to buy your first bitcoin. For the different exchanges use these prices:
// 1 Bitcoin	11949.16 lv.
// 1 g of gold	67.51 lv.

function bitcoinMining(input) {
    let totalMoney = 0;
    let totalGold = 0;
    let dayCounter = 0;
    let firstCoinDay = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let oneBitcoin = Math.floor(totalMoney / bitcoinPrice);
    let totalBitcoin = 0;
    let bitCoinCounter = 0;

    for (let day = 0; day < input.length; day++) {
        dayCounter++;
        let minedGold = Number(input[day]);

        if (dayCounter % 3 === 0) {
            minedGold *= 0.7; // Stealing 30% of mined gold on every third day
        }

        // totalGold += minedGold;
        totalMoney += minedGold * goldPrice;

        if (totalMoney >= bitcoinPrice && firstCoinDay === 0) {
            firstCoinDay = dayCounter;
        }
        // totalBitcoin += oneBitcoin;
        // console.log(`Bought bitcoins: ${totalBitcoin}`);

        if (totalMoney >= bitcoinPrice) {
            bitCoinCounter++;
            totalBitcoin += bitCoinCounter;
            totalMoney -= bitCoinCounter * bitcoinPrice;
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoin}`);

    if (firstCoinDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstCoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}
// bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);


