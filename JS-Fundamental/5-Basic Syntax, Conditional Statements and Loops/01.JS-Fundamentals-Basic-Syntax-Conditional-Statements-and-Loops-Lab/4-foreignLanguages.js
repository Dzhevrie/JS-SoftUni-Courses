// Write a program, which prints the language, that a given country speaks. You can receive only the following combinations: 
// •	English is spoken in England and USA;
// •	Spanish is spoken in Spain, Argentina, and Mexico;
// •	For the others, we should print "unknown";
// Input
// You will receive a single country name.
// Output
// Print the language, which the country speaks, or if it is unknown for your program, print "unknown".

function foreignLanguages(country) {
    switch (country) {
        case "England":
        case "USA":
            console.log("English");
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
            break;
    }
}
foreignLanguages("USA");
foreignLanguages("Germany");
