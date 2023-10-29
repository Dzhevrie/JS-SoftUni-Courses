function friendListMaintenance(input) {
    let friendsList = input.shift().split(", "); // Initialize the friendsList from the first element of input
    let blackList = []; // Initialize an empty blacklist
    let lostList = []; // Initialize an empty lost list

    for (const line of input) {
        if (line === "Report") { // If the line is "Report," exit the loop
            break;
        }

        const [command, ...params] = line.split(" "); // Split the line into a command and its parameters
        if (command === "Blacklist") { // If the command is "Blacklist"
            const name = params.join(" "); // Get the name from the parameters
            if (friendsList.includes(name) && !blackList.includes(name)) {
                blackList.push(name); // Add the name to the blacklist if it's in the friendsList and not already blacklisted
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (command === "Error") { // If the command is "Error"
            const index = parseInt(params[0]); // Get the index from the parameters
            if (index >= 0 && index < friendsList.length && !blackList.includes(friendsList[index])) {
                lostList.push(friendsList[index]); // Add the friend to the lostList
                friendsList[index] = "Lost"; // Change the friend's name to "Lost"
                console.log(`${lostList[lostList.length - 1]} was lost due to an error.`);
            }
        } else if (command === "Change") { // If the command is "Change"
            const index = parseInt(params[0]); // Get the index from the parameters
            if (index >= 0 && index < friendsList.length) {
                const newName = params.slice(1).join(" "); // Get the new name
                console.log(`${friendsList[index]} changed his username to ${newName}.`);
                friendsList[index] = newName; // Change the friend's name to the new name
            }
        }
    }

    console.log(`Blacklisted names: ${blackList.length}`);
    console.log(`Lost names: ${lostList.length}`);
    console.log(friendsList.join(" ")); // Output the current state of the friendsList
}
friendListMaintenance(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"]);

// Output
// Mike was blacklisted. 
// Blacklisted names: 1 
// Lost names: 0 
// Blacklisted John Eddie

console.log('------------');

friendListMaintenance(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]);


// Output
// William was lost due to an error.
//  Mike changed his username to Mike123.
//   Blacklisted names: 0
//   Lost names: 1
//   Mike123 John Eddie Lost
  
console.log('-------');

friendListMaintenance(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"]);

    // Output
    // Maya was not found. 
    // John was lost due to an error. 
    // Blacklisted names: 0 
    // Lost names: 1 
    // Mike Lost Eddie William