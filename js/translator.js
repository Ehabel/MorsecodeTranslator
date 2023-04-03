import morseDict from "./dict.js";

const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
};

const getCharValFromMorse = (char) => {
    return getKeyByValue(morseDict, char);
};

const getEnglishStringFromMorse = (word) => {
    return word.split(" ").map(getCharValFromMorse).join("").trim();
};

export const morsetoeng = (morseString) => {
    return morseString
        .replaceAll(/\s*\/\s*/g, "/")
        .replaceAll(/\s\s+/g, "/")
        .trim()
        .split("/")
        .map(getEnglishStringFromMorse)
        .join(" ");
};

export const engtomorse = (englishString) => {
    return englishString
        .replaceAll(/\/+/g, "/")
        .split("")
        .map((char) => {
            return morseDict[char.toUpperCase()];
        })
        .join(" ");
};
