function solve(text) {
  let arr = text.split(/(?=[A-Z])/);

  console.log(arr.join(", "));
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
