const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => {
        return object[key] === value;
    });
};

const getCharValFromMorse = (dict, char) => {
    return getKeyByValue(dict, char) ? getKeyByValue(dict, char) : "?";
};

const getEnglishStringFromMorse = (dict, word) => {
    return word
        .split(" ")
        .map((char) => getCharValFromMorse(dict, char))
        .join("")
        .trim();
};

export const morsetoeng = (dict, morseString) => {
    return morseString
        .replaceAll(/\s*\/\s*/g, "/")
        .replaceAll(/\s\s+/g, "/")
        .trim()
        .split("/")
        .map((char) => getEnglishStringFromMorse(dict, char))
        .join(" ");
};

export const engtomorse = (dict, englishString) => {
    return englishString
        .trim()
        .split("")
        .map((char) => {
            return dict[char.toUpperCase()] ? dict[char.toUpperCase()] : "?";
        })
        .join(" ");
};
