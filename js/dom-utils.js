import { engToMorse, morseToEng } from "./translator.js";


// to display translation
const input = document.getElementById('input');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        const inputType = document.getElementById('inputType');

        if (inputType.value === "eng") {
            // console.log("The type is eng");
            // console.log(engToMorse(input.value));
            const outputText = engToMorse(input.value);

            const output = document.getElementById('output');
            output.innerHTML = outputText;
        } else {
            // console.log("The type is mrs");
            // console.log(morseToEng(input.value));
            const outputText = morseToEng(input.value);

            const output = document.getElementById('output');
            output.innerHTML = outputText;
        }
    }
});


// to select output type depending on input type
const inputType = document.getElementById('inputType');
const outputType = document.getElementById('outputType');

inputType.addEventListener('change', () => {
    if (inputType.value === "eng") {
        outputType.value = "mrs";
    } else {
        outputType.value = "eng";
    }
});


// to switch input and output types
const switchBtn = document.getElementById('switch');

switchBtn.addEventListener('click', () => {
    const tempVal = inputType.value;
    inputType.value = outputType.value;
    outputType.value = tempVal;
});