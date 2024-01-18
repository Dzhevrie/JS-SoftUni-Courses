// Write a function that calculates the total price of an order and prints it on the console. The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.

function orders(product, quantity) {
    let price = 0;
    let total = 0;

    if (product === product) {

        switch (product) {
            case "coffee": price = 1.50;
                break;
            case "water": price = 1.00;
                break;
            case "coke": price = 1.40;
                break;
            case "snacks": price = 2.00;
                break;
        }
        total = price * quantity;
    }
    console.log(total.toFixed(2));
}
orders("water", 5)	/*5.00;*/
orders("coffee", 2);/*3.00)*/
orders("snacks", 5);
