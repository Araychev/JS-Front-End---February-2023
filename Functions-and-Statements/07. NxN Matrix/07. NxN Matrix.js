function printMatrix(num) {
  arr = [];
  let output = "";

  for (let i = 0; i < num; i++) {
    arr.push(num);
  }

  for (let num of arr) {
    output += `${num} `;
  }

  for (let index = 0; index < num; index++) {
    console.log(output);
  }
}

printMatrix(3);
