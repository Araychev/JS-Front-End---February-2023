function wordsTracer(inputArr) {
  let baseWords = inputArr.shift().split(" ");
  let words = {};

  for (const word of baseWords) {
    let count = inputArr.filter((w) => w === word).length;

    words[word] = count;
  }

  let sortedWords = Object.entries(words).sort((wordA, wordB) => {
    let [_nameA, countA] = wordA;
    let [_nameB, countB] = wordB;

    return countB - countA;
  });

  for (const [word, count] of sortedWords) {
    console.log(`${word} - ${count}`);
  }
}

wordsTracer([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
