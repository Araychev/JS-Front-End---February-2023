function subtract() {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.querySelector("#secondNumber").value;
  let result = 0;

  result = Number(firstNumber) - Number(secondNumber);
  document.querySelector("#result").textContent = result;
}
