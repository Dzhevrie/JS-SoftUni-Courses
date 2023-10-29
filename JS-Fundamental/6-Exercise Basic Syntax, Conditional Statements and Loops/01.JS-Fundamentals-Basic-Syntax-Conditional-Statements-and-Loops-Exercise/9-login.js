// You will be given a string representing a username. The correct password will be that username reversed. Until you receive the correct password print on the console: "Incorrect password. Try again.". When you receive the correct password print: "User {username} logged in." 
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program. 
// The input comes as an array of strings - the first string represents username and each subsequent string is a password.

function login(input) {
    let username = input[0];
    let pass = "";
    let index = input[1];

    for (let i = username.lenght - 1; i >= username; i--) {
        pass += username[i];
    }

    let guess = input[index];
    index++;
    let wrongAttempts = 0;

    while (pass != username) {
        wrongAttempts++;

        if (wrongAttempts === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");

        guess = index;
        index++;
    }
    console.log(`User ${username} logged in.`);

}
// login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
// login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);