function manipulateDeck(input) {
    let cards = input.shift().split(", ");
    let numCommands = Number(input.shift());

    for (let i = 0; i < numCommands; i++) {
        let [command, ...args] = input[i].split(", ");
        let cardName = args[0];
        let index = Number(args[1]);

        if (command === "Add") {
            if (cards.includes(cardName)) {
                console.log("Card is already in the deck");
            } else {
                cards.push(cardName);
                console.log("Card successfully added");
            }
        } else if (command === "Remove") {
            if (cards.includes(cardName)) {
                cards = cards.filter((c) => c !== cardName);
                console.log("Card successfully removed");
            } else {
                console.log("Card not found");
            }
        } else if (command === "Remove At") {
            if (index >= 0 && index < cards.length) {
                cards.splice(index, 1);
                console.log("Card successfully removed");
            } else {
                console.log("Index out of range");
            }
        } else if (command === "Insert") {
            if (index >= 0 && index <= cards.length) {
                if (cards.includes(cardName)) {
                    console.log("Card is already in the deck");
                } else {
                    cards.splice(index, 0, cardName);
                    console.log("Card successfully added");
                }
            } else {
                console.log("Index out of range");
            }
        }
    }

    // Print the final deck of cards
    console.log(cards.join(", "));
}

// Example usage
manipulateDeck([
    "Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"
]);


// Example usage
manipulateDeck([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add, King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds"
]);


manipulateDeck
    (["Ace of Diamonds, Queen of Hearts, King of Clubs",
        "3",
        "Add, King of Diamonds",
        "Insert, 2, Jack of Spades",
        "Remove, Ace of Diamonds"]);

// output:
// Card successfully added
// Card successfully added
// Card successfully removed
// Queen of Hearts, Jack of Spades, King of Clubs, King of Diamonds