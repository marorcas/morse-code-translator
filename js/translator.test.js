import { engToMorse, morseToEng } from "./translator.js";
import { exampleError } from "./translator-errors.js";

describe("Test cases for english to morse code translator function", () => {
    test("Given an input in english, an output is produced of the correct translation in morse code", () => {
        expect(engToMorse("Hello")).toBe(undefined);
    });

    it("throws an example error", () => {
        expect(() => {
            engToMorse("hello", "hi");
        }).toThrow(exampleError);
        expect(() => {
            engToMorse("hello", 1);
        }).toThrow(exampleError);
    });
});

describe("Test cases for morse code to english translator function", () => {
    test("Given an input in morse code, an output is produced of the correct translation in english", () => {
        expect(morseToEng()).toBe(undefined);
    });

    it("throws an example error", () => {
        expect(() => {
            morseToEng("hello", "hi");
        }).toThrow(exampleError);
        expect(() => {
            morseToEng("hello", 1);
        }).toThrow(exampleError);
    });
});

// expect().toEqual()
// expect().not.toBe()