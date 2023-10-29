// Група ентусиасти обикалят по различни локации, където има златни мини. Вашата задача е да им помогнете като напишете програма, която да приема броя на локациите и очакван среден добив на злато за ден за една локация. За всеки ден ще получавате колко злато са добили на локацията. Проверете дали са постигнали очаквания добив за дадена локация или не.
// Вход:
// Първоначално от конзолата се прочита едно число – брой локации – цяло число в интервала [1.. 100]
// За всяка една локация се четат две числа, по едно на ред:
// 1.	На първия ред – очакван среден добив на ден злато – реално число в интервала [0.00.. 10000.00]
// 2.	На втория ред – брой дни, в който ще се копае на дадената локация – цяло число в интервала [1.. 30]
// За всеки ден се чете по едно число:
// •	Добито злато за деня – реално число в интервала [0.00.. 1000.00]
// Изход:
// След приключване на копаенето на дадена локация се печата един ред според случая:
// •	Ако средният добив злато за ден достига или надвишава очаквания среден добив на ден злато:
// o	"Good job! Average gold per day: {среден добив на ден за дадената локация}."
// •	Ако средният добив злато за ден е под очаквания среден добив на ден злато:
// o	"You need {злато, което не е достигнало за достигане на очакваният среден добив} gold."
// Резултатът да бъде форматиран до вторият знак след десетичният разделител.

function goldMine(input) {
    let index = 0;
    let locNumber = Number(input[index]);
    index++;

    for (let j = 0; j < locNumber; j++) {
        let expAvproducePerDay = Number(input[index]);
        index++;
        let workDayCount = Number(input[index]);
        index++;
        let sumGold = 0;
        let producedGold = Number(input[index]);
        index++;
        if (sumGold <= expAvproducePerDay) {
            sumGold += producedGold;
            index++;
            producedGold = Number(input[index]);
            // for (let j = 0; j < workDayCount; j++) {
            //     sumGold += producedGold;

            //     producedGold = Number(input[index]);
            //     index++;
            // }
            // for (e = 0; e < workDayCount; e++) {
            //     sumGold += producedGold;

            //     producedGold = Number(input[index]);
            //     index++;
            // }
        }
        let avPerday = sumGold / workDayCount;
        if (avPerday >= expAvproducePerDay) {
            console.log(`Good job! Average gold per day: ${avPerday.toFixed(2)}.`);
        } else {
            let neededGold = avPerday - expAvproducePerDay;
            console.log(`You need ${neededGold.toFixed(2)} gold.`);
        }
    }
    index++;
    locNumber = Number(input[index]);
}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);
    // let index = 0;
    // let locNumber = Number(input[index++]);

    // let expAvproducePerDay = Number(input[index]);
    // index++;

    // let workDayCount = Number(input[index]);
    // index++;

    // let producedGold = Number(input[index]);
    // index++;
    // let sumGold = 0;
    // if (locNumber > 0) {
    //     for (let j = 0; j < workDayCount; j++) {
    //         sumGold += producedGold;

    //         producedGold = Number(input[index]);
    //         index++;

    //     }
    // } else {
    //     for (e = 0; e < workDayCount; e++) {
    //         sumGold += producedGold;

    //         producedGold = Number(input[index]);
    //         index++;
    //     }
    // }

    // let avPerday = sumGold / workDayCount;
    // if (avPerday >= expAvproducePerDay) {
    //     console.log(`Good job! Average gold per day: ${avPerday.toFixed(2)}.`);
    // } else {
    //     let neededGold = avPerday - expAvproducePerDay;
    //     console.log(`You need ${neededGold.toFixed(2)} gold.`);
    // }
// // Антон Кръстев
// function solve(input) {
//     let index = 0;
//     let locations = Number(input[index++]);
//     for (let l = 0; l < locations; l++) {
//         let expectedAvrgYield = Number(input[index++]);
//         let days = Number(input[index++]);
//         let yield = 0;
//         for (let d = 0; d < days; d++) {
//             let currentYield = Number(input[index++]);
//             yield += currentYield;
//         }
//         let avrgPerLocation = (yield / days);
//         let diff = Math.abs(avrgPerLocation - expectedAvrgYield);
//         if (avrgPerLocation < expectedAvrgYield) {
//             console.log(`You need ${diff.toFixed(2)} gold.`);
//         } else {
//             console.log(`Good job! Average gold per day: ${avrgPerLocation.toFixed(2)}.`);
//         }
//     }
// }