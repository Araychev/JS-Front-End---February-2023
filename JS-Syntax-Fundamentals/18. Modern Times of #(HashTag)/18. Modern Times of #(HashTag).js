function solve(text) {
  return text
    .split(" ")
    .filter((item) => item.startsWith("#") && containsOnlyLetters(item))
    .map((item) => item.slice(1))
    .filter((item) => item !== "")
    .join("\n");

  function containsOnlyLetters(item) {
    return [...item.toLowerCase()]
      .slice(1)
      .map((symbol) => symbol.charCodeAt(0))
      .every((charCode) => charCode >= 97 && charCode <= 122);
  }
}

console.log(
  solve(
    "The symbol # is known #variously in English-speaking #regions as the #number sign"
  )
);
