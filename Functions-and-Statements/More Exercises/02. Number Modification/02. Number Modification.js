function numberModification(inputNum) {
  let num = inputNum;
  const avgOfDigits = (n, total = 0, count = 0) =>
    n == 0
      ? total / count
      : avgOfDigits(Math.floor(n / 10), total + (n % 10), count + 1);

  while (avgOfDigits(num) < 5) {
    num = appendNine(num);
  }

  console.log(num);

  function appendNine(num) {
    let stringNum = num.toString();
    let addNine = stringNum + "9";

    return Number(addNine);
  }
}

numberModification(5835);
