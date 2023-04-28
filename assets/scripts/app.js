const defaultInput = 0;
let currentResult = defaultInput;
let logEnteries = [];

//to convert the input into integer as it was fetching it as a string earlier
const getUserInput = () => {
  return parseInt(userInput.value);
};

const userLogs = (operation, initialValue, enteredValue, finalValue) => {
  logEnteries.push({
    Operation: operation,
    InitialValue: initialValue,
    FinalValue: finalValue,
    EnteredValue: enteredValue,
  });
  console.log(logEnteries);
  //outputLog(initialLog);
};

//for code refactoring.
const createAndWriteResults = (
  operator,
  operatorName,
  initialresult,
  enteredinput
) => {
  let calculationDescription = `${operatorName} of ${initialresult} ${operator} ${enteredinput}`;

  outputResult(currentResult, calculationDescription); //from vendor file
};

const getCalculationResult = (operatorType, operator) => {
  let enteredinput = getUserInput();
  let initialresult = currentResult;
  if (operatorType == "Addition") {
    currentResult += enteredinput;
  } else if (operatorType == "Subtraction") {
    currentResult -= enteredinput;
  } else if (operatorType == "Multiplication") {
    currentResult *= enteredinput;
  } else if (operatorType == "Division") {
    currentResult /= enteredinput;
  }

  createAndWriteResults(operator, operatorType, initialresult, enteredinput);
  userLogs(operatorType, initialresult, enteredinput, currentResult);
};

const add = () => {
  getCalculationResult("Addition", "+");
};

const subtract = () => {
  getCalculationResult("Subtraction", "-");
};

const multiply = () => {
  getCalculationResult("Multiplication", "*");
};

const divide = () => {
  getCalculationResult("Division", "/");
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
