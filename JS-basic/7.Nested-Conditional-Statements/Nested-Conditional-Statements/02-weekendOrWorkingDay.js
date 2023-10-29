// Напишете функция която, чете ден от седмицата (текст), на английски език - въведен от потребителя.
//  Ако денят е работен отпечатва на конзолата - "Working day", ако е почивен - "Weekend". 
//  Ако се въведе текст различен от ден от седмицата да се отпечата - "Error".

function weekendOrWorkingDay(input) {
    let day = input[0];
    switch (day) {
        case "Monday": console.log("Working day"); break;
        case "Tuesday": console.log("Working day"); break;
        case "Wednesday": console.log("Working day"); break;
        case "Thursday": console.log("Working day"); break;
        case "Friday": console.log("Working day"); break;
        case "Saturday": console.log("Weekend"); break;
        case "Sunday": console.log("Weekend"); break;
        default: console.log("Error");

    }
}
weekendOrWorkingDay(["Then"]);