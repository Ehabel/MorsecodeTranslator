import { engtomorse, morsetoeng } from "./translator.js";
import morseDict from "./dict.js";

const englishBox = document.querySelector(".english__textarea");
const morseBox = document.querySelector(".morse__textarea");

englishBox.addEventListener("input", () => {
    morseBox.value = engtomorse(morseDict, englishBox.value);
});

morseBox.addEventListener("input", () => {
    englishBox.value = morsetoeng(morseDict, morseBox.value);
});
