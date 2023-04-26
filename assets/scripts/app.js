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
    EnteredValue : enteredValue,
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

const add = () => {
  let enteredinput = getUserInput();
  let initialresult = currentResult;
  currentResult = currentResult + getUserInput();
  createAndWriteResults("+", "Addition", initialresult, enteredinput);
  userLogs("Addition", initialresult, enteredinput, currentResult);
};

const subtract = () => {
  let enteredinput = getUserInput();
  let initialresult = currentResult;
  currentResult = currentResult - getUserInput();
  createAndWriteResults("-", "Subtraction", initialresult, enteredinput);
  userLogs("Subtraction", initialresult, enteredinput, currentResult);
};

const multiply = () => {
  let enteredinput = getUserInput();
  let initialresult = currentResult;
  currentResult = currentResult * getUserInput();
  createAndWriteResults("*", "Multiplication", initialresult, enteredinput);
  userLogs("Multiplication", initialresult, enteredinput, currentResult);
};

const divide = () => {
  let enteredinput = getUserInput();
  let initialresult = currentResult;
  currentResult = currentResult / getUserInput();
  createAndWriteResults("/", "Division", initialresult, enteredinput);
  userLogs("Division", initialresult, enteredinput, currentResult);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
