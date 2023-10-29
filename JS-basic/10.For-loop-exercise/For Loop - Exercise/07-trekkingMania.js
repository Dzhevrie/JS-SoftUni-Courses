// Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. Според размера на групата, катерачите ще изкачват различни върхове.
// •	Група до 5 човека – изкачват Мусала
// •	Група от 6 до 12 човека – изкачват Монблан
// •	Група от 13 до 25 човека – изкачват Килиманджаро
// •	Група от 26 до 40 човека –  изкачват К2
// •	Група от 41 или повече човека – изкачват Еверест
// Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
// •	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]
// Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00% с точност до втората цифра след десетичната запетая.
// •	Първи ред - процентът изкачващи Мусала
// •	Втори ред – процентът изкачващи Монблан
// •	Трети ред – процентът изкачващи Килиманджаро
// •	Четвърти ред – процентът изкачващи К2
// •	Пети ред – процентът изкачващи Еверест
// Изход:
// 0.00 %
//     1.70 %
//     7.08 %
//     8.78 %
//     82.44 %

function trekkingMania(input) {
    let groupCounty = Number(input[0]);
    let musalaCount = 0;
    let monblanCount = 0;
    let kilimanjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (let i = 1; i < groupCounty + 1; i++) {
        let groupSize = Number(input[i]);

        if (groupSize <= 5) {
            musalaCount += groupSize;
        } else if (groupSize <= 12) {
            monblanCount += groupSize;
        } else if (groupSize <= 25) {
            kilimanjaroCount += groupSize;
        } else if (groupSize <= 40) {
            k2Count += groupSize;
        } else if (groupSize >= 41) {
            everestCount += groupSize;
        }
    }

    let totaltrekers = musalaCount + monblanCount + kilimanjaroCount + k2Count + everestCount;
    let percent1 = (musalaCount / totaltrekers) * 100;
    let percent2 = (monblanCount / totaltrekers) * 100;
    let percent3 = (kilimanjaroCount / totaltrekers) * 100;
    let percent4 = (k2Count / totaltrekers) * 100;
    let percent5 = (everestCount / totaltrekers) * 100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);
}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"]);

