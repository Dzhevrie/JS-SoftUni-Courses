// Студент трябва да отиде на изпит в определен час (например в 9:30 часа). Той идва в изпитната зала в даден час на пристигане (например 9:40). Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това. Ако е пристигнал по-рано повече от 30 минути, той е подранил. Ако е дошъл след часа на изпита, той е закъснял. Напишете функция, която получава време на изпит и време на пристигане и отпечатва дали студентът е дошъл навреме, дали е подранил или е закъснял и с колко часа или минути е подранил или закъснял.
// Изход
// На първият ред отпечатайте:
// •	"Late", ако студентът пристига по-късно от часа на изпита.
// •	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
// •	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
// Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
// •	"mm minutes before the start" за идване по-рано с по-малко от 1.
// •	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
// •	 "mm minutes after the start" за закъснение под час.
// •	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".

function onTimeForTheExam(input) {
    let hourArrive = Number(input[0]);
    let minuteArrive = Number(input[1]);
    let hourStartExam = Number(input[2]);
    let minuteStartExam = Number(input[3]);

    let arrivalTime = hourArrive * 60 + minuteArrive;
    let examTime = hourStartExam * 60 + minuteStartExam;
    let diffTime = Math.abs(arrivalTime - examTime);
    let diffminutes = diffTime % 60;
    let diffhours = Math.floor(diffTime / 60);

    if (arrivalTime === examTime) {
        console.log("On time");
    } else if (examTime >= arrivalTime) {
        console.log("Late");
        if (diffTime < 60) {
            console.log(`${diffminutes} minutes after the start`);
        } else {
            if (diffminutes < 10) {
                console.log(`${diffhours}:0${diffminutes} hours after the start`);
            } else {
                console.log(`${diffhours}:${diffminutes} hours after the start`);
            }
        }
    } else {
        if (diffTime <= 30) {
            console.log("On time");
            console.log(`${diffminutes} minutes before the start`);
        } else {
            console.log("Early");
            if (diffTime < 60) {
                console.log(`${diffminutes} minutes before the start`);
            } else {
                if (diffminutes < 10) {
                    console.log(`${diffhours}:0${diffminutes} hours before the start`);
                } else {
                    console.log(`${diffhours}:${diffminutes} hours before the start`);
                }
            }
        }
    }
}
onTimeForTheExam(["9",
    "00",
    "10",
    "30"]);