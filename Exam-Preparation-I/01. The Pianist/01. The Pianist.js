function pianist(arrInput) {
  let initialNumber = arrInput.shift();
  let piecesArr = [];

  for (let i = 0; i < initialNumber; i++) {
    let [piece, composer, key] = arrInput.shift().split("|");
    let pieceObj = {};
    pieceObj["name"] = piece;
    pieceObj["composer"] = composer;
    pieceObj["key"] = key;

    piecesArr.push(pieceObj);
  }

  for (const item of arrInput) {
    let newPieceObj = {};
    let line = item.split("|");
    let command = line[0];
    let piece = line[1];

    switch (command) {
      case "Add":
        let composer = line[2];
        let key = line[3];
        if (!piecesArr.find((e) => e.name === piece)) {
          newPieceObj["name"] = piece;
          newPieceObj["composer"] = composer;
          newPieceObj["key"] = key;

          piecesArr.push(newPieceObj);

          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        } else {
          console.log(`${piece} is already in the collection!`);
        }

        break;

      case "Remove":
        if (piecesArr.find((e) => e.name === piece)) {
          piecesArr.splice(
            piecesArr.indexOf(piecesArr.find((e) => e.name === piece)),
            1
          );
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;

      case "ChangeKey":
        let newKey = line[2];
        if (piecesArr.find((e) => e.name === piece)) {
          piecesArr.find((e) => e.name === piece)["key"] = newKey;
          console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;

      default:
        break;
    }
  }

  for (const piece of piecesArr) {
    console.log(
      `${piece.name} -> Composer: ${piece.composer}, Key: ${piece.key}`
    );
  }
}

pianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
