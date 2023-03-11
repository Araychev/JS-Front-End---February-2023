function isPalindrome(arr) {
  for (item of arr) {
    let itemString = item.toString();
    let reverseItem = itemString.split("").reverse().join("");

    if (itemString === reverseItem) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

isPalindrome([32, 2, 232, 1010]);
