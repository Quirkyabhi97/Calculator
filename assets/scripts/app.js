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
    "Initial Value": initialValue,
    "Final Value": finalValue,
    "Entered Value": enteredValue,
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
  userLogs("ADD", initialresult, enteredinput, currentResult);
};

const subtract = () => {
  let enteredinput = getUserInput();
  let initialresult = currentResult;
  currentResult = currentResult - getUserInput();
  createAndWriteResults("-", "Subtraction", initialresult, enteredinput);
  // userLogs(currentResult,-);
};

const multiply = () => {
  let enteredinput = getUserInput();
  let initialresult = currentResult;
  currentResult = currentResult * getUserInput();
  createAndWriteResults("*", "Multiplication", initialresult, enteredinput);
  // userLogs(currentResult,+);
};

const divide = () => {
  let enteredinput = getUserInput();
  let initialresult = currentResult;
  currentResult = currentResult / getUserInput();
  createAndWriteResults("/", "Division", initialresult, enteredinput);
  // userLogs(currentResult,/);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
