function pointsValidation(arr) {
  const x1 = arr[0];
  const y1 = arr[1];
  const x2 = arr[2];
  const y2 = arr[3];
  if (Number.isInteger(Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)))) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)))) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (
    Number.isInteger(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))
  ) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

pointsValidation([3, 0, 0, 4]);
