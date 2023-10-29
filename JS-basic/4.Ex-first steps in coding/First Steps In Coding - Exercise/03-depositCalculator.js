function depositCalculator(input) {
    let amountDeposited = Number(input[0]);
    let depositPeriodMonths = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let interstDecimel = annualInterestRate / 100;
    let sum = amountDeposited + depositPeriodMonths * ((amountDeposited * interstDecimel) / 12);

    console.log(sum);
}

depositCalculator(["200", "3", "5.7"]);