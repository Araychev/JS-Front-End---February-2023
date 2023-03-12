function employees(arr) {
  let obj = arr.reduce((key, value) => {
    key[value] = value.length;
    return key;
  }, {});

  for (const key in obj) {
    console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
