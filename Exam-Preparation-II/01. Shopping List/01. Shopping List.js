function shoppingList(arrInput) {
  let initialList = arrInput.shift().split("!");

  for (const line of arrInput) {
    let [command, item, newItem] = line.split(" ");

    switch (command) {
      case "Urgent":
        if (!initialList.includes(item)) {
          initialList.unshift(item);
        }
        break;

      case "Unnecessary":
        if (initialList.includes(item)) {
          initialList.splice(initialList.indexOf(item), 1);
        }
        break;

      case "Correct":
        if (initialList.includes(item)) {
          initialList[initialList.indexOf(item)] = newItem;
        }
        break;

      case "Rearrange":
        if (initialList.includes(item)) {
          initialList.splice(initialList.indexOf(item), 1);
          initialList.push(item);
        }
        break;

      default:
        break;
    }
  }

  console.log(initialList.join(", "));
}

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
