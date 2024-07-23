const lengthSlider = document.getElementById('len');
const lengthDisplay = document.getElementById('curr_length');
const passwordDisplay = document.getElementById('password-display');
const generateBtn = document.getElementById('generate-btn');
const uppercaseCheck = document.getElementById('uppercases');
const lowercaseCheck = document.getElementById('lowercases');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function updateLengthDisplay() {
    lengthDisplay.textContent = `LENGTH: ${lengthSlider.value}`;
    updateSliderBackground();
}

function updateSliderBackground() {
    const percentage = ((lengthSlider.value - lengthSlider.min) / (lengthSlider.max - lengthSlider.min)) * 100;
    lengthSlider.style.background = `linear-gradient(90deg , rgb(11, 30, 223) ${percentage}%, rgba(225, 225, 255, 0.216) ${percentage}%)`;
}

function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function generatePassword() {
    let password = '';
    let charSet = '';

    if (uppercaseCheck.checked) charSet += upperLetters;
    if (lowercaseCheck.checked) charSet += lowerLetters;
    if (numbersCheck.checked) charSet += numbers;
    if (symbolsCheck.checked) charSet += symbols;

    if (charSet === '') {
        passwordDisplay.textContent = 'Please select at least one option';
        return;
    }

    for (let i = 0; i < lengthSlider.value; i++) {
        password += getRandomChar(charSet);
    }

    passwordDisplay.textContent = password;
}

function updateGenerateButton() {
    generateBtn.disabled = !(uppercaseCheck.checked || lowercaseCheck.checked || numbersCheck.checked || symbolsCheck.checked);
}

lengthSlider.addEventListener('input', updateLengthDisplay);
generateBtn.addEventListener('click', generatePassword);

[uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck].forEach(checkbox => {
    checkbox.addEventListener('change', updateGenerateButton);
});

// Initial setup
updateLengthDisplay();
updateGenerateButton();