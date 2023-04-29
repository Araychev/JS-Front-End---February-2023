function horseRacing(arr) {
  let initialArr = arr.shift().split("|").reverse();

  for (const item of arr) {
    let line = item.split(" ");
    let command = line[0];

    switch (command) {
      case "Retake":
        let overtakingHorse = line[1];
        let overtakenHorse = line[2];

        let idxOfOvertakingHorse = initialArr.indexOf(overtakingHorse);
        let idxOfOvertakenHorse = initialArr.indexOf(overtakenHorse);

        if (idxOfOvertakenHorse < idxOfOvertakingHorse) {
          move(initialArr, idxOfOvertakingHorse, idxOfOvertakenHorse);
          console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
        }

        break;
      case "Trouble":
        let horseName = line[1];
        let idxOfOHorse = initialArr.indexOf(horseName);

        if (initialArr.length - 1 > idxOfOHorse) {
          move(initialArr, idxOfOHorse, idxOfOHorse + 1);
          console.log(`Trouble for ${horseName} - drops one position.`);
        }

        break;
      case "Rage":
        let rageHorseName = line[1];
        let idxOfHorse = initialArr.indexOf(rageHorseName);
        let newIdx = idxOfHorse - 3;
        if (newIdx <= 0) {
          move(initialArr, idxOfHorse, 0);
          console.log(`${rageHorseName} rages 2 positions ahead.`);
        }
        if (newIdx === 1) {
          move(initialArr, idxOfHorse, 0);
          console.log(`${rageHorseName} rages 2 positions ahead.`);
        }
        if (newIdx > 1) {
          move(initialArr, idxOfHorse, newIdx);
          console.log(`${rageHorseName} rages 2 positions ahead.`);
        }

        break;
      case "Miracle":
        let lastPositionHorseName = initialArr[initialArr.length - 1];
        initialArr.unshift(initialArr.pop());
        console.log(`What a miracle - ${lastPositionHorseName} becomes first.`);
        break;
      case "Finish":
        initialArr.reverse();
        console.log(initialArr.join("->"));
        console.log(`The winner is: ${initialArr[initialArr.length - 1]}`);
        return;
      default:
        break;
    }
  }

  function move(array, oldIndex, newIndex) {
    if (newIndex >= array.length) {
      newIndex = array.length - 1;
    }
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    return array;
  }
}

horseRacing([
  "Bella|Alexia|Sugar",
  "Retake Alexia Sugar",
  "Rage Bella",
  "Trouble Bella",
  "Finish",
]);
