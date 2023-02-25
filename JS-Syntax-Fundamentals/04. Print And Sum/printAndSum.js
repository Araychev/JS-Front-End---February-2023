function solve(numStart, numEnd) {
  let arr = [];
  let arrSum = 0;
  let output = "";

  for (let i = numStart; i < numEnd + 1; i++) {
    arr.push(i);
    arrSum += i;
  }

  for (let numer of arr) {
    output += `${numer} `;
  }

  console.log(output);
  console.log(`Sum: ${arrSum}`);
}
