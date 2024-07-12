import { engToMorse, morseToEng } from "./translator.js";

describe("Test cases for english to morse code translator function", () => {
    test("Given an input in english, an output is produced of the correct translation in morse code", () => {
        expect(engToMorse("Hello world")).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
        expect(engToMorse("How are you")).toBe(".... --- .-- / .- .-. . / -.-- --- ..-");
    });

    test("throws an error if there is a non-letter character", () => {
        expect(() => {
            engToMorse("&&&");
        }).toThrow();
        expect(() => {
            engToMorse("hello!");
        }).toThrow();
    });
});

describe("Test cases for morse code to english translator function", () => {
    test("Given an input in morse code, an output is produced of the correct translation in english", () => {
        expect(morseToEng(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe("hello world");
        expect(morseToEng(".... --- .-- / .- .-. . / -.-- --- ..-")).toBe("how are you");
    });

    test("throws an error if an invalid morse code character is entered", () => {
        expect(() => {
            morseToEng("...___.");
        }).toThrow();
        expect(() => {
            morseToEng(". / . .__..-");
        }).toThrow();
    });
});