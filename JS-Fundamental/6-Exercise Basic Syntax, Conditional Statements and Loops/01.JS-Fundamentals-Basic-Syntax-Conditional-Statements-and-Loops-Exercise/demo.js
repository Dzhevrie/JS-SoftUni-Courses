function bitcoinMining(input) {
    let totalGold = 0;
    let totalBitcoin = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let totalMoney = 0;
    // let isBitcoinPurchased = false;


    for (let day = 0; day < input.length; day++) {
        let minedGold = input[day];

        if ((day + 1) % 3 === 0) {
            minedGold *= 0.7; // Stealing 30% of mined gold on every third day
        }

        totalGold += minedGold;
        totalMoney = totalGold * goldPrice;

        if (totalMoney >= bitcoinPrice) {
            totalMoney -= bitcoinPrice;
            totalBitcoin++;
        }

        if (totalBitcoin = 1) {
            console.log(`Day of the first purchased bitcoin: ${day + 1}`);
            // isBitcoinPurchased = true;
        } else {
            console.log();
        }

        if (totalMoney > 0) {
            console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
        }
    }


    console.log(`Bought bitcoins: ${totalBitcoin}`);

}

// bitcoinMining(100, 200, 300);
// bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);