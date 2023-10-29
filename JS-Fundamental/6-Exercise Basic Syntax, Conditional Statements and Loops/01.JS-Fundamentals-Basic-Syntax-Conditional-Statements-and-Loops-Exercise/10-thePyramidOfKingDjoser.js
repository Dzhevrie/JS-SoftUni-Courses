
// function thePyramidOfKingDjoser(params) {

// }
// thePyramidOfKingDjoser();
function calculateResources(baseSize, increment) {
  let stoneTotal = 0;
  let marbleTotal = 0;
  let lapisTotal = 0;
  let goldTotal = 0;
  let pyramidHeight = 0;
  let floor = 1;

  for (let curSize = baseSize; curSize > 0; curSize -= 2) {
    pyramidHeight += increment;

    let totalArea = curSize ** 2;

    if (curSize <= 2) {
      goldTotal += totalArea * increment;
    } else {
      let stonArea = (curSize - 2) ** 2;
      stoneTotal += stonArea * increment;


      if (floor % 5 === 0) {
        let lapisArea = totalArea - stonArea;
        lapisTotal += lapisArea * increment;
      } else {
        let marbaleArea = totalArea - stonArea;
        marbleTotal += marbaleArea * increment;
      }
    }
    floor++;
  }

  console.log(`Stone required: ${Math.ceil(stoneTotal)}`);
  console.log(`Marble required: ${Math.ceil(marbleTotal)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisTotal)}`);
  console.log(`Gold required: ${Math.ceil(goldTotal)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}
calculateResources(11, 1);

