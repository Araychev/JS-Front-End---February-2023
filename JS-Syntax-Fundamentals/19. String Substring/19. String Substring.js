function solve(word, text) {
  let wordToLowercase = word.toLowerCase();
  let textArr = text.split(" ");

  for (const text of textArr) {
    if (text.toLowerCase() === wordToLowercase) {
      return word;
    }
  }

  return `${word} not found!`;
}
console.log(solve("python", "JavaScript is the best programming language"));
