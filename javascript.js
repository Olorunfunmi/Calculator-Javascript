let first = parseInt(prompt("What is your first number"));
let Second = parseInt(prompt("What is your second number"));
let operator = prompt("What is your operator");

if (operator === "+") {
  let addition = first + Second;
  alert(addition);
} else if (operator === "-") {
  let subtraction = first - Second;
  alert(subtraction);
} else if (operator === "*") {
  let multiplication = first * Second;
  alert(multiplication);
} else if (operator === "/") {
  let division = first / Second;
  alert(division);
} else alert("Invalid entry");
