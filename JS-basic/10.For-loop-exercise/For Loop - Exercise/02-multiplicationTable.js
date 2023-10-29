function multiplicationTable(input) {
    let quantity = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let result = i * quantity;
        console.log(`${i} * ${quantity} = ${result}`);
    }
}
multiplicationTable(["5"]);