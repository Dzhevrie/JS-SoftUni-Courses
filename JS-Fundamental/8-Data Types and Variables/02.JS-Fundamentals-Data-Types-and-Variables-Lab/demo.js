function friendListMaintenance(input) {
    const initialFriends = input.shift().split(", ");
    const blacklistedNames = [];
    const lostNames = [];

    for (const line of input) {
        if (line === "Report") {
            break;
        }

        const [command, ...params] = line.split(" ");
        const action = params.join(" ");
        const index = parseInt(params[0]);

        switch (command) {
            case "Blacklist":
                if (initialFriends.includes(action) && !blacklistedNames.includes(action)) {
                    blacklistedNames.push(action);
                    console.log(`${action} was blacklisted.`);
                } else {
                    console.log(`${action} was not found.`);
                }
                break;

            case "Error":
                if (index >= 0 && index < initialFriends.length) {
                    const lostFriend = initialFriends[index];
                    if (!blacklistedNames.includes(lostFriend)) {
                        lostNames.push(lostFriend);
                        initialFriends[index] = "Lost";
                        console.log(`${lostFriend} was lost due to an error.`);
                    }
                }
                break;

            case "Change":
                if (index >= 0 && index < initialFriends.length) {
                    console.log(`${initialFriends[index]} changed his username to ${action}.`);
                    initialFriends[index] = action;
                }
                break;
        }
    }

    console.log(`Blacklisted names: ${blacklistedNames.length}`);
    console.log(`Lost names: ${lostNames.length}`);
    console.log(initialFriends.filter(friend => friend !== "Lost").join(" "));
}
friendListMaintenance(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"]);