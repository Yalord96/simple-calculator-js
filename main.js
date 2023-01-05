const sum = (a, b) => {
  return a + b
}

const substract = (a, b) => {
  return a - b
}

const multiply = (a, b) => {
  return a * b
}

const divide = (a, b) => {
  return a / b
}

const operations = {
  sum: '+',
  substract: '-',
  multiply: '*',
  divide: '/'
}


function calculator ({a, b, operation}) {
  let result = null;

  switch (operation) {
    case operations.sum:
      result = sum(a, b)
    break;

    case operations.substract:
      result = substract(a, b)
    break;

    case operations.multiply:
      result = multiply(a, b)
    break;

    case operations.divide:
      result = divide(a, b)
    break;
  }

  return result;
}

const calc = document.querySelector('.calculate');
const inputA = document.querySelector('.a');
const inputB = document.querySelector('.b');
const selectedOperation = document.querySelector('.operations');
const outputResult = document.querySelector('.result');

calc.addEventListener('click', function () {
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const operation = selectedOperation.value;

  result = calculator({a, b, operation});
  outputResult.value = result;
})