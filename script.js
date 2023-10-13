const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    const type = button.getAttribute('data-type');

    if (type === 'function') {
      handleFunction(value);
    } else {
      handleInput(value);
    }
  });
});

function handleFunction(func) {
  // Handle the math functions here
  if (func === 'sqrt') {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = Math.sqrt(currentValue);
    }
  } else if (func === '^2') {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = currentValue * currentValue;
    }
  } else if (func === '^') {
    // Handle x^y function
  } else if (func === 'sin') {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = Math.sin(currentValue);
    }
  } else if (func === 'cos') {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = Math.cos(currentValue);
    }
  } else if (func === 'tan') {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      display.value = Math.tan(currentValue);
    }
  } else if (func === 'ln') {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
      display.value = Math.log(currentValue);
    }
  } else if (func === 'log') {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
      display.value = Math.log10(currentValue);
    }
  }
}

function handleInput(value) {
  // Handle numeric and operator input here
  // You can modify your existing code for handling numbers and operators
}

// Add your calculator logic for handling numbers and operators here
