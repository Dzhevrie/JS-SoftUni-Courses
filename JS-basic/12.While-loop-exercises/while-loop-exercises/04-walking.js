// Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден. Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. Напишете функция, която чете от масив по колко стъпки изминава тя всеки път като излиза през деня и когато постигне целта си да се изписва "Goal reached! Good job!" и колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"
// Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките, които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal."

function walking(input) {
    let index = 0;
    let goalSteps = 10000;
    let totalSteps = 0;

    let currSteps = input[index];
    index++;

    while (currSteps !== "Going home") {
        currSteps = Number(currSteps);
        totalSteps += currSteps;

        if (totalSteps >= currSteps) {
            break;
        }

        currSteps = input[index];
        index++;
    }
    if (currSteps === "Going home") {
        let stepsGoingHome = Number(input[index]);
        totalSteps += stepsGoingHome;
        if (totalSteps >= goalSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goalSteps} steps over the goal!`);
        } else {
            console.log(`${goalSteps - totalSteps} more steps to reach goal.`);
        }

    } else {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - goalSteps} steps over the goal!`);
    }
}
walking(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"]);