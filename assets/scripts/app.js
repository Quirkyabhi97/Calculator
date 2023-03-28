const defaultInput = 0;
let currentResult = defaultInput;

const getUserInput = () => {
  return parseInt(userInput.value);
}

const add = () => {
  let calculationDescription = `Addition of ${currentResult} + ${getUserInput()}`;
  currentResult = currentResult + getUserInput();
  outputResult(currentResult, calculationDescription);
};

addBtn.addEventListener("click", add);
