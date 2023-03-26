function radioCrystals(arr) {
  const targetThickness = arr[0];
  let currCrystalMicrons = 0;
  let cut = 0;
  let lap = 0;
  let grind = 0;
  let etch = 0;
  let xray = 0;

  for (let i = 1; i < arr.length; i++) {
    currCrystalMicrons = arr[i];

    crystalWork(currCrystalMicrons);
  }

  function crystalWork(num) {
    console.log(`Processing chunk ${currCrystalMicrons} microns`);
    if (currCrystalMicrons / 4 >= targetThickness) {
      while (currCrystalMicrons / 4 >= targetThickness) {
        currCrystalMicrons /= 4;
        cut++;
      }
      console.log(`Cut x${cut}`);
      console.log(`Transporting and washing`);
      cut = 0;
      currCrystalMicrons = Math.floor(currCrystalMicrons);
    }

    if (currCrystalMicrons * 0.8 > targetThickness) {
      while (currCrystalMicrons * 0.8 > targetThickness) {
        currCrystalMicrons *= 0.8;
        lap++;
      }
      console.log(`Lap x${lap}`);
      lap = 0;
      console.log(`Transporting and washing`);
      currCrystalMicrons = Math.floor(currCrystalMicrons);
    }

    if (currCrystalMicrons - 20 > targetThickness) {
      while (currCrystalMicrons - 20 > targetThickness) {
        currCrystalMicrons -= 20;
        grind++;
      }
      console.log(`Grind x${grind}`);
      grind = 0;
      console.log(`Transporting and washing`);
      currCrystalMicrons = Math.floor(currCrystalMicrons);
    }

    if (currCrystalMicrons > targetThickness) {
      while (currCrystalMicrons > targetThickness) {
        currCrystalMicrons -= 2;
        etch++;
      }
      console.log(`Etch x${etch}`);
      etch = 0;
      console.log(`Transporting and washing`);
      currCrystalMicrons = Math.floor(currCrystalMicrons);
    }

    if (xray === 0 && currCrystalMicrons < targetThickness) {
      currCrystalMicrons += 1;
      xray++;
      console.log(`X-ray x${xray}`);
    }

    console.log(`Finished crystal ${currCrystalMicrons} microns`);
  }
}

radioCrystals([1000, 4000, 8100]);
