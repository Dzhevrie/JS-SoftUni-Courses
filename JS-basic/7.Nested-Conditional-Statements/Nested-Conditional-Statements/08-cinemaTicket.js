// Да се напише функция, която получава ден от седмицата (текст) и принтира на конзолата цената на 
// билет за кино според деня от седмицата:

function cinemaTicket(input) {
    let dayOfTheWeek = input[0];

    if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Friday") {
        console.log("12");
    } else if (dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday") {
        console.log(14);
    } else if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
        console.log(16);
    }
}
cinemaTicket(["Sunday"]);