var resultInput = document.getElementById('result');
var operand1 = null;
var operator = null;
var isOperatorClicked = false;

function clearInput() {
  resultInput.value = '';
  operand1 = null;
  operator = null;
}

function appendNumber(number) {
  if (isOperatorClicked) {
    resultInput.value = '';
    isOperatorClicked = false;
  }
  resultInput.value += number;
}

function setOperator(op) {
  operand1 = parseFloat(resultInput.value);
  operator = op;
  isOperatorClicked = true;
}

function calculate() {
  var operand2 = parseFloat(resultInput.value);
  var result;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      result = operand2;
  }

  resultInput.value = result;
  operand1 = null;
  operator = null;
}
