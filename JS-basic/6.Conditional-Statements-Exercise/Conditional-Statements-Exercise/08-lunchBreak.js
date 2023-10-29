// По време на обедната почивка искате да изгледате епизод от своя любим сериал. Вашата задача е да напишете 
// програма, с която ще разберете дали имате достатъчно време да изгледате епизода. По време на почивката 
// отделяте време за обяд и време за отдих. Времето за обяд ще бъде 1/8 от времето за почивка, а времето 
// за отдих ще бъде 1/4 от времето за почивка. 
// Изход
// На конзолата да се изпише един ред:
// •	Ако времето е достатъчно да изгледате епизода: 
// "You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
// •	Ако времето не Ви е достатъчно:
// "You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
// Времето да се закръгли до най-близкото цяло число нагоре.


function lunchBreak(input) {
    let moviName = input[0];
    let moviDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunchTime = breakDuration * 1 / 8;
    let breakTime = breakDuration * 1 / 4;
    let timeLeft = breakDuration - lunchTime - breakTime;

    if (timeLeft >= moviDuration) {
        let freeTime = timeLeft - moviDuration;
        console.log(`You have enough time to watch ${moviName} and left with ${Math.ceil(freeTime)} minutes free time.`);
    } else {
        let neededTime = moviDuration - timeLeft;
        console.log(`You don't have enough time to watch ${moviName}, you need ${Math.ceil(neededTime)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",
    "48",
    "60"])
    ;