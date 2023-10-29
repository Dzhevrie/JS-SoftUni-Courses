function vacationBooksList(input) {
    let amountOfPages = Number(input[0]);
    let readForHour = Number(input[1]);
    let amontOfDays = Number(input[2]);

    let avaragePages = amountOfPages / readForHour;
    let readPerHour = avaragePages / amontOfDays;

    console.log(readPerHour);
}

vacationBooksList(["432", "15", "4"]);