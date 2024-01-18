// Write a function that receives a lable between 2.00 and 6.00 and prints a formatted line with lable and description.
// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"

function formatlable(points) {
    let lable = "";
    
    if (points < 3) {
        lable = "Fail";
        points = 2;
    } else {
        if (points >= 3.00 && points < 3.50) {
            lable = "Poor";
        } else if (points >= 3.50 && points < 4.50) {
            lable = "Good";
        } else if (points >= 4.50 && points < 5.50) {
            lable = "Very good";
        } else if (points >= 5.50) {
            lable = "Excellent";
        }

        points = points.toFixed(2);
    }

    console.log(`${lable} (${points})`);
}
formatlable(3.33);
formatlable(4.50);
formatlable(2.99);



