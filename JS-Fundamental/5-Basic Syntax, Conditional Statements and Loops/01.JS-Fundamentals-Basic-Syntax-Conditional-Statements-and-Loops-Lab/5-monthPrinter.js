// Write a program, that takes an integer as a parameter and prints the corresponding month. If the number is more than 12 or less than 1 print "Error!"
// Input
// You will receive a single number.
// Output
// If the number is within the boundaries print the corresponding month, otherwise print "Error!"

function monthPrinter(num) {
    let name = " ";
    if (num > 12 || num < 1) {
        console.log("Error!");
    } else if (num >= 1 && num <= 12) {
        switch (num) {
            case 1: name = "January";
                break;
            case 2: name = "February";
                break;
            case 3: name = "March";
                break;
            case 4: name = "April";
                break;
            case 5: name = "May";
                break;
            case 6: name = "June";
                break;
            case 7: name = "July";
                break;
            case 8: name = "August";
                break;
            case 9: name = "September";
                break;
            case 10: name = "October";
                break;
            case 11: name = "November";
                break;
            case 12: name = "December";
                break;
            default:
                console.log("Error!");
                break;
        }
    }
    console.log(name);
}

monthPrinter(2);
monthPrinter(3);
monthPrinter(13);
monthPrinter(1);