import { engtomorse, morsetoeng } from "./translator.js";

const englishBox = document.querySelector(".english__textarea");
const morseBox = document.querySelector(".morse__textarea");

englishBox.addEventListener("input", () => {
    morseBox.value = engtomorse(englishBox.value);
});

morseBox.addEventListener("input", () => {
    englishBox.value = morsetoeng(morseBox.value);
});
