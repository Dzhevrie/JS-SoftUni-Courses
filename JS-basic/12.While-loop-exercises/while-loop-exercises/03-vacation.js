// Джеси е решила да събира пари за екскурзия и иска от вас да ѝ помогнете да разбере дали ще успее да събере необходимата сума. Тя спестява или харчи част от парите си всеки ден. Ако иска да похарчи повече от наличните си пари, то тя ще похарчи всичко, което има и ще ѝ останат 0 лева.
// Вход
// От масива се четат:
// •	Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
// •	Налични пари - реално число в интервала [0.00... 25000.00]
// След това многократно се четат по два реда:
// •	Вид действие – текст с възможности "spend" и "save".
// •	Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]
// Изход
// Функцията трябва да приключи при следните случаи:
// •	Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
// o	"You can't save the money."
// o	"{Общ брой изминали дни}"
// •	Ако Джеси събере парите за почивката на конзолата се изписва:
// o	"You saved the money for {общ брой изминали дни} days."

function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;

    let curentMoney = Number(input[index]);
    index++;

    let actionName = input[index];
    index++;

    let moneyAction = Number(input[index]);
    index++;

    let dayCounter = 0;
    let spentDayCounter = 0;

    while (curentMoney < neededMoney) {
        dayCounter++;
        if (actionName === "spend") {
            spentDayCounter++;
            curentMoney -= moneyAction;

            index++;
            moneyAction = Number(input[index]);

            if (curentMoney < 0) {
                curentMoney = 0;
                break;
            }
        } else if (actionName === "save") {
            curentMoney += moneyAction;

            index++;
            moneyAction = Number(input[index]);
        }


        if (spentDayCounter === 5) {
            console.log("You can't save the money.");
            console.log(`${dayCounter}`);
            break
        }
    }
    if (spentDayCounter !== 5) {
        console.log(`You saved the money for ${dayCounter} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(`${dayCounter}`);
    }


}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
    ;