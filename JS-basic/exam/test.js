function dishwasher(input) {
 
    let detergent = Number(input[0]) * 750;
    let index = 1;
    let count = input[index++];
    let detergentLeft = 0;
    let counter = 1
    let countDishes = 0;
    let countPots = 0;
   
    while (count !== `End`) {
      count = Number(count);
   
      if (detergent <= 0) {
        console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
        return;
      }
   
      detergentLeft = count * 5;
      detergent -= detergentLeft;
      counter++;
      countDishes += count;
      count = input[index++];
   
      if (counter % 3 === 0) {
        count = Number(count);
        detergentLeft = count * 15;
        detergent -= detergentLeft;
        countPots += count;
        counter++;
        count = input[index++];
      }
   
    }
   
    if (detergent >= 0) {
      console.log(`Detergent was enough!\n${countDishes} dishes and ${countPots} pots were washed.\nLeftover detergent ${detergent} ml.`);
    } else if (detergent < 0) {
      console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
    }
   
  }
  dishwasher([`1`,`10`,`15`,`10`,`12`,`13`,`30`]);