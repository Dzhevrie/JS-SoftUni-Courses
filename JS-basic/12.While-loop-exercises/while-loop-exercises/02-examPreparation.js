// Напишете функция, в която Марин решава задачи от изпити докато не получи съобщение "Enough" от лектора си. При всяка решена задача той получава оценка. Функцията трябва да приключи прочитането на данни при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
// Незадоволителна е всяка оценка, която е по-малка или равна на 4.
// Вход
// •	На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
// •	След това многократно се четат по два реда:
// o	Име на задача - текст (низ)
// o	Оценка - цяло число в интервала [2…6]
// Изход
// •	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда: 
// o	"Average score: {средна оценка}"
// o	"Number of problems: {броя на всички задачи}"
// o	"Last problem: {името на последната задача}"
// •	Ако получи определеният брой незадоволителни оценки:
// o	"You need a break, {брой незадоволителни оценки} poor grades."
// Средната оценка да бъде форматирана до втория знак след десетичната запетая. 

function examPreparation(input) {
    index = 0;
    let badScore = Number(input[index]);
    index++;

    let taskName = input[index];
    index++;

    let score = Number(input[index]);
    index++;

    let totalScoreCounter = 0;
    let badScoreCounter = 0;
    let scorTotalSum = 0;
    let lastTask = '';

    while (taskName !== "Enough") {
        if (score <= 4) {
            badScoreCounter++;
            if (badScoreCounter === badScore) {
                console.log(`You need a break, ${badScoreCounter} poor grades.`);
                break;
            }
        }

        totalScoreCounter++;
        lastTask = taskName;
        scorTotalSum += score

        taskName = input[index];
        index++;

        if (taskName !== "Enough") {
            score = Number(input[index]);
            index++;
        }
    }
    if (badScoreCounter !== badScore) {
        let averageScore = scorTotalSum / totalScoreCounter;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${totalScoreCounter}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
;