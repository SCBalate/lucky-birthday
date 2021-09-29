const dateOfBirth = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const displayMessage = document.querySelector("#output-para");

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  console.log(sumOfDate, numberToCheck);
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(`${numberToCheck} is a lucky number!! 🥳 `);
  }
  showMessage(`${numberToCheck} is not that lucky 😕`);
};

const showMessage = (message) => {
  displayMessage.innerText = message;
};

checkButton.addEventListener("click", () => {
  const date = dateOfBirth.value;
  const numberToCheck = luckyNumber.value;
  if (date && numberToCheck) {
    const sumOfDate = calculateSum(date);
    checkIsNumberLucky(sumOfDate, numberToCheck);
  } else {
    showMessage("you can't left the fields blank");
  }
});