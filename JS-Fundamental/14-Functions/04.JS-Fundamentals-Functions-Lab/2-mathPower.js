// Write a function that calculates and print the value of a number raised to a given power:
function mathPower(number, exponenta) {
    let resault = 1;

    for (let i = 0; i < exponenta; i++) {

        resault *= number;
    }

    console.log(resault);

}
mathPower(2, 8);
mathPower(3, 4);