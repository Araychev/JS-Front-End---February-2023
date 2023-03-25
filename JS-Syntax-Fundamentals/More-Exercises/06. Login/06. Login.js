function login(arr) {
  const userName = arr[0];
  const correctPassword = arr[0].split("").reverse().join("");
  let cont = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === correctPassword) {
      console.log(`User ${userName} logged in.`);
    } else if (cont === 4) {
      console.log(`User ${userName} blocked!`);
    } else {
      console.log(`Incorrect password. Try again.`);
      cont++;
    }
  }
}

login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
