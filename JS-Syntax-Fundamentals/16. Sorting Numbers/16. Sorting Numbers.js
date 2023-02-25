function bigSmallSorter(arr) {
  let sortedArr = [...arr.sort((n, k) => n - k)];
  let newArr = [];
  let flip = true;

  for (let i of arr) {
    let temp = flip ? sortedArr.shift() : sortedArr.pop();
    newArr.push(temp);
    flip = !flip;
  }

  return newArr;
}
