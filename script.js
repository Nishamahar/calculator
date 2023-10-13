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
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = '';
      }
    } else {
      // Append the button value to the display
      display.value += buttonValue;
    }
  });
});
