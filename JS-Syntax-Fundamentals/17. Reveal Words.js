function solve(word, paragraph) {
  paragraph = paragraph.replace("*", word);
  while (paragraph.includes("*")) {
    paragraph = paragraph.replace("*", "");
  }

  console.log(paragraph);
}

solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
