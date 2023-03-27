const defaultInput = 0;
let currentResult = defaultInput;
calculationDescription = "Addition";

const add = () => {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, calculationDescription);
};

addBtn.addEventListener("click", add);
