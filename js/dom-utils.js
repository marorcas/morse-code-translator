import { engToMorse, morseToEng } from "./translator.js";


// to display translation
const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        const inputType = document.getElementById('inputType');

        if (inputType.value === "eng") {
            // console.log("The type is eng");
            // console.log(engToMorse(input.value));

            try {
                const outputText = engToMorse(input.value);

                output.innerHTML = outputText
            } catch (e) {
                console.log(e);
                alert(e.message);
            }
            
        } else {
            // console.log("The type is mrs");
            // console.log(morseToEng(input.value));

            try {
                const outputText = morseToEng(input.value);

                output.innerHTML = outputText;
            } catch (e) {
                console.log(e);
                alert(e.message);
            }
        }
    }
});


// all text manipulation code

// to select output type depending on input type
const inputType = document.getElementById('inputType');
const outputType = document.getElementById('outputType');

const switchText = () => {
    const tempText = input.value;
    input.value = output.innerHTML;
    output.innerHTML = tempText;
};

inputType.addEventListener('change', () => {
    if (inputType.value === "eng") {
        outputType.value = "mrs";
        switchText();
        switchInstructions();
    } else {
        outputType.value = "eng";
        switchText();
        switchInstructions();
    }
});


// to switch input and output types
const switchBtn = document.getElementById('switch');

switchBtn.addEventListener('click', () => {
    const tempVal = inputType.value;
    inputType.value = outputType.value;
    outputType.value = tempVal;

    switchText();
    switchInstructions();
});

// deletes text in output if text in input is deleted
// **could be improved by matching the delete letter by letter
input.addEventListener('input', () => {
    if (input.value === "") {
        output.innerHTML = "";
    }
});


// clear button
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    input.value = "";
    output.value = "";
});


// instructions content
const instructions = document.getElementById('instructions');
const switchInstructions = () => {
    if (inputType.value === "eng") {
        instructions.innerHTML = "This translator will ommit any non-letter characters from the translation. In the morse code translation, spaces between words will be represented with a '/'.";
    } else {
        instructions.innerHTML = "This translator does not translate non-letter characters. Please use spaces in between morse code letters and '/' in between words.";
    }
};