// Първата задача от тази тема е да се напише функция, която чете оценка, получена като аргумент и отпечатва "Excellent!", 
// ако оценката е 5.50 или по-висока.
// вход	изход		вход	изход		вход	изход		вход	изход
// (["6"])	Excellent!		(["5"])	(няма изход)		(["5.50"])	Excellent!		(["5.49"])	(няма изход)




function excellentResult(input) {
    let grade = Number(input[3]);

    if (grade >= 5.50) {
        console.log("Excellent!");
    }
}
excellentResult(["6", "5", "5.50", "5.49"]);