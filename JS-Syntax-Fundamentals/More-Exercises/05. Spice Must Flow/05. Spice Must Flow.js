function spiceMustFlow(startingYield) {
  let miningPerDay = 0;
  let daysOfUsingMine = 0;
  let totalExtract = -26;

  while (startingYield >= 100) {
    miningPerDay = startingYield - 26;
    totalExtract += miningPerDay;
    startingYield -= 10;
    daysOfUsingMine++;
  }

  console.log(daysOfUsingMine);
  if (totalExtract < 0) {
    totalExtract = 0;
  }
  console.log(totalExtract);
}

spiceMustFlow(0);
