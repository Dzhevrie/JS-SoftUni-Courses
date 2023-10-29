// Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters. Print the result like the examples below:
function printAndSum(start, end) {
    let sums = '';
    let sum = 0;
    for (let num = start; num <= end; num++) {
        sums += num + " ";
        sum += num;
    }
    console.log(sums);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
// printAndSum(0, 26);
// printAndSum(50, 60);
