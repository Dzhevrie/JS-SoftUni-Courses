// Напишете функция, която първоначално прочита име и парола на потребителски профил. След това чете парола за вход. 
// •	при въвеждане на грешна парола: потребителя да се подкани да въведе нова парола.
// •	при въвеждане на правилна парола: отпечатваме "Welcome {username}!".

function password(input) {
    let name = input[0];
    let pass = input[1];
    let data = input[2]
    let index = 3;

    while (data !== pass) {
        data = input[index];
        index++;

    }
    console.log(`Welcome ${name}!`);

} password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);