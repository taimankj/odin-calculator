// Variables for calculations
let n1 = ""; // number 1 input
let n2 = ""; // number 2 input
let op = ""; // operator

// DOM Nodes
let buttons = document.querySelectorAll("button");
let outputArea = document.querySelector("#output");
let historyArea = document.querySelector("#history");

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  // Rounds to the nearest integer, and then divides
  return Math.round((n1 / n2 + Number.EPSILON) * 100) / 100;
}

function operate(n1, n2, op) {
  switch (op) {
    case "+":
      return add(n1, n2);
    case "-":
      return subtract(n1, n2);
    case "*":
      return multiply(n1, n2);
    case "/":
      return divide(n1, n2);
    default:
      return "INVALID INPUT";
  }
}

function isSet(...variables) {
  let isVarSet = true;
  for (const i in variables) {
    if (!variables[i]) isVarSet = false;
  }

  return isVarSet;
}

function clearState() {
  historyArea.innerText = "";
  outputArea.innerText = "";
  n1 = "";
  n2 = "";
  op = "";
}

function evaluateCalculation() {
  let calculatedVal = operate(+n1, +n2, op);

  historyArea.innerText = `${n1} ${op} ${n2}`;
  outputArea.innerText = `${calculatedVal} ${op}`;
  n1 = `${calculatedVal}`;
  n2 = "";
}
function processInput(input) {
  /* 
  if operator is equals and if n1, op, and n2 is set,
     process expression: n1 op n2
     set innerText for history and output area to ''
     set n1, op, n2 to ''
  else if input is 'clear'
     set innerText for history and output area to ''
     set n1, op, n2 to ''
  else if input is not a number (+, *, -, or /), then
     if n1 is not initialized, set n1 to '0'
     set op to input
  else input is number, then
     if operator is set
         if n2 is set, then append input to n2
         else, set n2 to input
     else,
         if n1 is set, then append input to n1
         else, set n1 to input
  */

  if (input == "=" && isSet(n1, n2, op)) {
    evaluateCalculation();
    return;
  } else if (input == "clear") {
    clearState();
  } else if (input == ".") {
    if (isSet(op) && !n2.includes(".")) {
      n2 += input;
      outputArea.innerText = `${n1} ${op} ${n2}`;
      return;
    }

    if (isSet(n1) && !isSet(op) && !n1.includes(".")) {
      n1 += input;
      outputArea.innerText = `${n1} ${op} ${n2}`;
      return;
    }
  } else if (Number.isNaN(+input)) {
    if (isSet(n1, n2, op)) {
      evaluateCalculation();
      op = input;
      outputArea.innerText = `${n1} ${op} `;
      return;
    }
    if (!isSet(n1)) n1 = "0";
    op = input;
  } else {
    if (isSet(op)) {
      if (!isSet(n2) && input == "0" && op == "/") {
        alert("WTH, who said you can do that?!");
        return;
      }
      if (isSet(n2)) {
        n2 += input;
      } else {
        n2 = input;
      }
    } else {
      if (isSet(n1)) {
        n1 += input;
      } else {
        n1 = input;
      }
    }
  }

  outputArea.innerText = `${n1} ${op} ${n2}`;
}

// event listeners
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    processInput(e.target.value);
    console.log(`Current State:\n\tn1: ${n1} n2: ${n2} op: ${op}`);
  }),
);
