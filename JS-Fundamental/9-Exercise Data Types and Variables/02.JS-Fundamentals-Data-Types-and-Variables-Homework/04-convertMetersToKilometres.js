// You will be given a number that will be the distance in meters. Write a program that converts meters to kilometers formatted to the second decimal point.
function convertMetersToKilometres(params) {
    let res = params / 1000;
    console.log(res.toFixed(2));
}
convertMetersToKilometres(1852);
