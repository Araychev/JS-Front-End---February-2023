function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

checkLeapYear(4);
