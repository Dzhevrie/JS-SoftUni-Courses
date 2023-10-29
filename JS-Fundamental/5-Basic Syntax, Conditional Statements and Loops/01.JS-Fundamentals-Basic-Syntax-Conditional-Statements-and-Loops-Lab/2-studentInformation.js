// You will be given 3 parameters – student name (string), age (number), and average grade (number). Your task is to print all the info about the student in the following format: 
// `Name: {student name}, Age: {student age}, Grade: {student grade}`
//  Note: The grade should be formatted to the second decimal point.

function studentInformation(name, age, avgrade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${avgrade.toFixed(2)}`);
}
studentInformation('John', 15, 5.54678);
studentInformation('Steve', 16, 2.1426);
studentInformation('Marry', 12, 6.00);