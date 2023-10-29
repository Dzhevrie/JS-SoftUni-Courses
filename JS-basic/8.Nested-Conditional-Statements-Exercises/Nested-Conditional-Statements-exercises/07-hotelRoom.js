// Хотел предлага 2 вида стаи: студио и апартамент. Напишете функция, която изчислява цената за целия престой 
// за студио и апартамент. Цените зависят от месеца на престоя:
// Май и октомври	Юни и септември	Юли и август
// Студио – 50 лв./нощувка	Студио – 75.20 лв./нощувка	Студио – 76 лв./нощувка
// Апартамент – 65 лв./нощувка	Апартамент – 68.70 лв./нощувка	Апартамент – 77 лв./нощувка
// Предлагат се и следните отстъпки:
// •	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
// •	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
// •	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
// •	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
// Вход
// Получават се 2 аргумента:
// •	 месецът – May, June, July, August, September или October
// •	броят на нощувките – цяло число в интервала [0 … 200]
// Изход
// Да се отпечатат на конзолата 2 реда:
// •	На първия ред: “Apartment: {цена за целият престой} lv.”
// •	На втория ред:“Studio: {цена за целият престой } lv.”
// Цената за целия престой форматирана с точност до два знака след десетичната запетая.


function hotelRoom(input) {
    let month = input[0];
    let numberDays = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = numberDays * 50;
        apartmentPrice = numberDays * 65;
        if (numberDays > 7 && numberDays <= 14) {
            studioPrice *= 0.95;
        } else if (numberDays > 14) {
            studioPrice *= 0.70;
            apartmentPrice *= 0.90;
        }
    }

    if (month === "June" || month === "September") {
        studioPrice = numberDays * 75.20;
        apartmentPrice = numberDays * 68.70;
        if (numberDays > 14) {
            studioPrice *= 0.80;
            apartmentPrice *= 0.90;
        }
    }

    if (month === "July" || month === "August") {
        studioPrice = numberDays * 76;
        apartmentPrice = numberDays * 77;
        if (numberDays > 14) {
            apartmentPrice *= 0.90;
        }
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May",
    "15"]);    
