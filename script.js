// Get the display element and buttons
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.getAttribute('data-value');
    
    if (buttonValue === 'AC') {
      // Clear the display
      display.value = '';
    } else if (buttonValue === 'DEL') {
      // Delete the last character
      display.value = display.value.slice(0, -1);
    } else if (buttonValue === '=') {
      // Evaluate the expression and display the result
      let expression = display.value;
      let result;
      
      // Replace x^ with Math.pow()
      expression = expression.replace(/x\^/g, 'Math.pow(');
      
      try {
        // Evaluate the expression with special functions
        result = eval(expression);
        
        // Check if the result includes any trigonometric functions or logarithms
        if (expression.includes('sin')) {
          result = Math.sin(result);
        } else if (expression.includes('cos')) {
          result = Math.cos(result);
        } else if (expression.includes('tan')) {
          result = Math.tan(result);
        } else if (expression.includes('ln')) {
          result = Math.log(result);
        } else if (expression.includes('log')) {
          result = Math.log10(result);
        } else if (expression.includes('√')) {
          result = Math.sqrt(result);
        }
        
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      // Append the button value to the display
      display.value += buttonValue;
    }
  });
});
