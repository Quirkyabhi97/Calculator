const defaultInput = 0;
let currentResult = defaultInput;
// let initialLog = ["1+1 = 2"];

//this function is used here to convert the input into integer as it was fetching it as a string earlier
const getUserInput = () => {
  return parseInt(userInput.value);
};

// const userLogs = (num,operator) => {
//   initialLog.push(
//     `${currentResult} +${getUserInput()} = ${currentResultOutput.textContent}`
//   );
//   alert(initialLog);
//   outputLog(initialLog);
// };

const add = () => {
  let calculationDescription = `Addition of ${currentResult} + ${getUserInput()}`;
  currentResult = currentResult + getUserInput();
  outputResult(currentResult, calculationDescription);
  // userLogs(currentResult,+);
};

const subtract = () => {
  let calculationDescription = `Subtraction of ${currentResult} - ${getUserInput()}`;
  currentResult = currentResult - getUserInput();
  outputResult(currentResult, calculationDescription);
  // userLogs(currentResult,-);
};

const multiply = () => {
  let calculationDescription = `Multiply of ${currentResult} * ${getUserInput()}`;
  currentResult = currentResult * getUserInput();
  outputResult(currentResult, calculationDescription);
  // userLogs(currentResult,+);
};

const divide = () => {
  let calculationDescription = `Divide of ${currentResult} / ${getUserInput()}`;
  currentResult = currentResult / getUserInput();
  outputResult(currentResult, calculationDescription);
  // userLogs(currentResult,/);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
