function test_same_digit(num) {
  let n = num;
  let sum = 0;
  while (n) {
    digit = n % 10;
    sum += digit;
    n = (n - digit) / 10;
  }

  const first = num % 10;
  while (num) {
    if (num % 10 !== first) {
      console.log(false);
      console.log(sum);
      return;
    }
    num = Math.floor(num / 10);
  }

  console.log(true);
  console.log(sum);
}
