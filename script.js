//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.otp-input');
    
    // Add event listeners to each input field
    inputs.forEach((input, index) => {
        // Typing forward behavior
        input.addEventListener('input', (e) => {
            const currentInput = e.target;
            
            // Check if the input is a single digit
            if (currentInput.value.length === 1 && !isNaN(parseInt(currentInput.value))) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            } else if (currentInput.value.length > 1) {
                // Handle pasting or multiple characters by only keeping the last one
                currentInput.value = currentInput.value.slice(-1);
            }
        });

        // Backspace behavior
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                const currentInput = e.target;
                if (currentInput.value === '' && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });

    // Initial focus on the first input field
    if (inputs.length > 0) {
        inputs[0].focus();
    }
});