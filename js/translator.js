import morse from './morse-data.js'; // is there a best practice way to do this?

export const engToMorse = (input) => {
    // create array of strings with the words from input
    // (remove spaces)
    const wordsArr = input.split(" ");
    
    // make each string in the array into an array of letters
    const lettersArr = wordsArr.map(word => [...word]);

    // turn each letter into morse code
    // first filter characters that are letters
    // then turn each char into upper case
    // then turn each char into its morse equivalent
    const morseArr = lettersArr.map((word) => {
        return word.filter(char => /[a-zA-Z]/.test(char)).map((char) => {
            const letterUpper = char.toUpperCase();

            return morse[letterUpper];
        });
    });

    return morseArr.map(word => word.join(" ")).join("       ");
};

export const morseToEng = (input) => {
    // create array of strings with the words from input 
    const wordsArr = input.split("/");

    // make each string in the array into an array of letters
    const lettersArr = wordsArr.map(word => word.split(" "));

    // turn each letter into english 
    const engArr = lettersArr.map((word) => {
        return word.map((char) => {
            for (let letter in morse) {
                if (morse[letter] === char) {
                    return letter.toLowerCase();
                }
            }
        });
    });

    return engArr.map(word => word.join("")).join(" ");
};