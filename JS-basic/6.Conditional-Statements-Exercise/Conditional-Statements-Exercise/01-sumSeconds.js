
// Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). 
// Да се напише функция, която получава три аргумента - секунди и пресмята сумарното
//  им време във формат "минути:секунди". Секундите да се изведат с водеща 
//  нула (2  "02", 7  "07", 35  "35"). 

function sumSeconds(input) {
    let firstRuner = Number(input["0"]);
    let secondRuner = Number(input["1"]);
    let thirdRuner = Number(input["2"]);

    let totalSecond = firstRuner + secondRuner + thirdRuner;
    let minutes = Math.floor(totalSecond / 60);
    let secondes = totalSecond % 60;

    let remindSeconds = secondes < 10 ? "0" + secondes : secondes;

    console.log(minutes + ":" + remindSeconds);
}
sumSeconds(["22", "7",
    "34"]);


