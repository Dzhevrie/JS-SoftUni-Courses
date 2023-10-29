// Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и
//  проверява  дали офисът на фирма е отворен, като работното време на офисът е от 10-18 часа, от
//   понеделник до  събота включително.

function workingHours(input) {
    let timeOfTheDay = Number(input[0]);
    let dayOfTheWeek = input[1];

    if (timeOfTheDay >= 10 && timeOfTheDay <= 18 && dayOfTheWeek !== "Sunday") {

        console.log("open");
    }
    else {
        console.log("closed");
    }
}

workingHours(["11",
    "Sunday"])

    ;