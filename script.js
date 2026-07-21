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
  return n1 / n2;
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

function processInput(input) {
  // if operator is equals and if n1, op, and n2 is set,
  //    process expression: n1 op n2
  // else if input is +, *, -, or / and if n1 is initialized
  //    set op to input
  //    else, set n1 to 0 and op to input
  // else if input is 'clear'
  //    set innerText for history and output area to ''
  //    set n1, op, n2 to ''
  // else input is number, then
  //    if operator is set
  //        if n2 is set, then append input to n2
  //        else, set n2 to input
  //    else,
  //        if n1 is set, then append input to n1
  //        else, set n1 to input
}

// event listeners
buttons.forEach((button) => button.addEventListener("click", (e) => {}));
