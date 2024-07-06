import { engToMorse, morseToEng } from "./translator.js";

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