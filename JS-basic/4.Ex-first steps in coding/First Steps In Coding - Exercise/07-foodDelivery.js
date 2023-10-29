// Ресторант отваря врати и предлага няколко менюта на преференциални цени: 
// •	Пилешко меню –  10.35 лв. 
// •	Меню с риба – 12.40 лв. 
// •	Вегетарианско меню  – 8.15 лв. 
// Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
// Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
// Цената на доставка е 2.50 лв и се начислява най-накрая.  
// Вход
// От конзолата се четат 3 реда:
// •	Брой пилешки менюта – цяло число в интервала [0 … 99]
// •	Брой менюта с риба – цяло число в интервала [0 … 99]
// •	Брой вегетариански менюта – цяло число в интервала [0 … 99]

// ["2 ",
// "4 ",
// "3 "]	116.2

function foodDelivery(input) {
    let chikenMenu = Number(input[0] * 10.35);
    let fishMenu = Number(input[1] * 12.40);
    let vegeterianianMenu = Number(input[2] * 8.15);
    let delivery = 2.50;

    let orderPrice = chikenMenu + fishMenu + vegeterianianMenu;
    let desertPrice = orderPrice * 20 / 100;

    let totalPrice = orderPrice + desertPrice + delivery;

    console.log(totalPrice);
}
foodDelivery(["2", "4", "3"]);