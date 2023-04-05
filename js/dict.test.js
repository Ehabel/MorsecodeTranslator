import morseDict from "./dict.js";
import {
    getKeyByValue,
    getCharValFromMorse,
    getEnglishStringFromMorse,
    morsetoeng,
    engtomorse,
} from "./translator.js";

test("Testing simple get from dictionary", () => {
    expect(getKeyByValue(morseDict, ".-")).toBe("A");
    expect(getKeyByValue(morseDict, "...")).toBe("S");
    expect(getKeyByValue(morseDict, "---")).toBe("O");
});

test("Get key by value not exists", () => {
    expect(getKeyByValue(morseDict, "")).toBe("?");
    expect(getKeyByValue(morseDict, "A")).toBe("?");
    expect(getKeyByValue(morseDict, undefined)).toBe("?");
});

test("Get char value from Morse", () => {
    expect(getCharValFromMorse(morseDict, ".")).toBe("E");
    expect(getCharValFromMorse(morseDict, "-.")).toBe("N");
    expect(getCharValFromMorse(morseDict, "A")).toBe("?");
    expect(getCharValFromMorse(morseDict, undefined)).toBe("?");
});

test("Get English string of word from Morse", () => {
    expect(getEnglishStringFromMorse(morseDict, "... --- ...")).toBe("SOS");
    expect(getEnglishStringFromMorse(morseDict, "... / ---")).toBe("S O");
    expect(getEnglishStringFromMorse(morseDict, "A")).toBe("?");
});

test("Get sentence of words in English from Morse", () => {
    expect(morsetoeng(morseDict, "... --- ...")).toBe("SOS");
    expect(morsetoeng(morseDict, "... --- .../ -- .")).toBe("SOS ME");
    expect(morsetoeng(morseDict, "A")).toBe("?");
    expect(morsetoeng(morseDict, "... --- .../////// -- .")).toBe("SOS ME");
    expect(morsetoeng(morseDict, "........./// -- .")).toBe("? ME");
    expect(morsetoeng(morseDict, "////.. sasas ... --- .../ ...")).toBe(
        " I?SOS S"
    );
});
