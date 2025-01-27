let display = document.getElementById('display');

// Append value to the display
function appendValue(value) {
    let lastChar = display.value[display.value.length - 1];

    // Prevent multiple operators or decimals in a row
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
        return;
    }

    // Prevent multiple decimal points in the same number
    if (value === '.' && lastChar === '.') {
        return;
    }
    
    // Prevent a decimal point directly after an operator
    if (['+', '-', '*', '/'].includes(lastChar) && value === '.') {
        display.value += '0.'; // Add leading zero before decimal
        return;
    }

    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = display.value.slice(0, -1); // Removes the last character
}

// Clear all and reset
function clearAll() {
    display.value = '';  // Clears the display (reset calculation)
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value); // Using eval to evaluate the expression
        
        // Prevent possible floating-point precision issues
        if (display.value.toString().includes('.')) {
            display.value = parseFloat(display.value).toFixed(8); // Round to 8 decimal places
        }
    } catch (e) {
        display.value = 'Error'; // In case of invalid input or error
    }
}
