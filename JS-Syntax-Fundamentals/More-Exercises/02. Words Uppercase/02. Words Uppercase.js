function wordsUppercase(text) {
  let arr = text
    .toUpperCase()
    .replace(/[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]/g, "")
    .split(" ");

  console.log(arr.join(", "));
}

wordsUppercase("Functions in JS can be nested, i.e. hold other functions");
