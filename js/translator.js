export const getKeyByValue = (object, value) => {
    const foundKey = Object.keys(object).find((key) => {
        return object[key] === value;
    });
    return foundKey ? foundKey : "?";
};

export const getCharValFromMorse = (dict, char) => {
    return getKeyByValue(dict, char);
};

export const getEnglishStringFromMorse = (dict, word) => {
    return word
        .split(" ")
        .map((char) => {
            if (word === "") return "";
            return getCharValFromMorse(dict, char)
                ? getCharValFromMorse(dict, char)
                : "?";
        })
        .join("")
        .trim();
};

export const morsetoeng = (dict, morseString) => {
    return morseString
        .trim()
        .replaceAll(/\s*\/\s*/g, "/")
        .replaceAll(/\s\s+/g, "/")
        .replaceAll(/\/\/+/g, "/")
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
