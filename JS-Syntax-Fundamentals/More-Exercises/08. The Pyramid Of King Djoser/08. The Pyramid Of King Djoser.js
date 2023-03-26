function solve(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;

  let newBase = base;
  let step = 0;
  let pyramidHeight = 1;

  while (newBase > 2) {
    step++;
    pyramidHeight++;
    stone += (newBase - 2) * (newBase - 2) * increment;
    marble += (newBase * 4 - 4) * increment;
    if (step === 5) {
      marble -= (newBase * 4 - 4) * increment;
      lapis += (newBase * 4 - 4) * increment;
      step = 0;
    }
    newBase -= 2;
  }

  gold = Math.pow(newBase, 2) * increment;

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);
}

solve(23, 0.5);
