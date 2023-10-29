// Дадени са n цели числа в интервала [1…1000]. От тях някакъв процент p1 са под 200, друг процент p2 са от 200 до 399, друг процент p3 са от 400 до 599, друг процент p4 са от 600 до 799 и останалите p5 процента са от 800 нагоре. Да се напише програма, която изчислява и отпечатва процентите p1, p2, p3, p4 и p5.
// Пример: имаме n = 20 числа: 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65. Получаваме следното разпределение и визуализация:


function histogram(input) {
    let n = Number(input[0]);
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;

    for (i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (num < 200) {
            sum1++;
        } else if (num <= 399) {
            sum2++;
        } else if (num <= 599) {
            sum3++;
        } else if (num <= 799) {
            sum4++;
        } else if (num >= 800) {
            sum5++;
        }
    }
    let p1 = (sum1 / n) * 100;
    let p2 = (sum2 / n) * 100;
    let p3 = (sum3 / n) * 100;
    let p4 = (sum4 / n) * 100;
    let p5 = (sum5 / n) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"]);