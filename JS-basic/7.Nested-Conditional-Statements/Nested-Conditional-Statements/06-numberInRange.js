// Да се напише функция, която проверява дали въведеното от потребителя число е в интервала [-100, 100] 
// и е различно от 0 и извежда "Yes", ако отговаря на условията, или "No" ако е извън тях.


function numberInRange(input) {
    let num = Number(input[0]);

    if (num <= 100 && num >= -100 && num !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
numberInRange(["-25"]);