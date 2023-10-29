function petShop(input) {
    let dogFood = Number(input[0]) * 2.50;
    let catFood = Number(input[1]) * 4;
    let tottal = dogFood + catFood;

    console.log(`${tottal} lv.`);
}
petShop(["13", "9"]);