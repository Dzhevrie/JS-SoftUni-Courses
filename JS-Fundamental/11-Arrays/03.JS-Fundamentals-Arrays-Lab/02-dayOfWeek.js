// Write a program, which receives a number and prints the corresponding name of the day of the week (in English).  
// If the number is NOT a valid day, print: "Invalid day!".

function dayOfWeek(day) {
    let weekDay = ["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"]
    if (day >= 1 && day <= 7) {
        console.log(weekDay[day - 1]);
    } else {
        console.log("Invalid day!");
    }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);


