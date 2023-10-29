// Да се напише функция, която получава възраст (реално число) и пол ('m' или 'f'), 
// въведени от потребителя, и отпечатва обръщение измежду следните:
// •	"Mr." – мъж (пол 'm') на 16 или повече години
// •	"Master" – момче (пол 'm') под 16 години
// •	"Ms." – жена (пол 'f') на 16 или повече години
// •	"Miss" – момиче (пол 'f') под 16 години

function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];
    if (gender === "m" && age >= 16) {
        console.log("Mr.");
    } else if (gender === "m" && age < 16) {
        console.log("Master");
    } else if (gender === "f" && age >= 16) {
        console.log("Ms.");
    } else if (gender === "f" && age < 16) {
        console.log("Miss");
    }
}
personalTitles(["13.5",
    "m"])


    ;
