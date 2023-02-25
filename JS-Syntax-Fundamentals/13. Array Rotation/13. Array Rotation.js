function solve(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.push(arr.shift());
  }
  let output = "";

  for (let number of arr) {
    output += `${number} `;
  }

  console.log(output);
}
