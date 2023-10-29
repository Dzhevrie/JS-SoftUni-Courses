// Лято е с много променливо време и Виктор има нужда от вашата помощ.Напишете функция, която спрямо 
// времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече.Вашия приятел има
//  различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от
// таблицата.
// Функцията получава два аргумента:
// •	Градусите - цяло число в интервала[10…42]
// •	Текст, време от денонощието - с възможности - "Morning", "Afternoon", "Evening"
// Да се отпечата на конзолата на един ред: "It's {градуси} degrees, get your {облекло} and {обувки}."

function summerOutfit(input) {
    let degree = Number(input[0]);
    let timeOfTheDay = input[1];
    let outfit = 0;
    let shoes = 0;

    if (timeOfTheDay === "Morning") {
        if (degree >= 10 && degree <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degree > 18 && degree <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degree >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }
    if (timeOfTheDay === "Afternoon") {
        if (degree >= 10 && degree <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degree > 18 && degree <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (degree >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    }
    if (timeOfTheDay === "Evening") {
        if (degree >= 10 && degree <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degree > 18 && degree <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degree >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["22",
    "Afternoon"])
    ;
