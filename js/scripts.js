import { engtomorse, morsetoeng } from "./translator.js";
import morseDict from "./dict.js";

const englishBox = document.querySelector(".english__textarea");
const morseBox = document.querySelector(".morse__textarea");
const rightBtn = document.querySelector(".buttons__right");
const rightArrow = document.querySelector(".fa-arrow-right");
const clearBtn = document.querySelector(".buttons__clear");
const leftBtn = document.querySelector(".buttons__left");
const leftArrow = document.querySelector(".fa-arrow-left");

englishBox.addEventListener("input", () => {
    morseBox.value = engtomorse(morseDict, englishBox.value);
});

morseBox.addEventListener("input", () => {
    englishBox.value = morsetoeng(morseDict, morseBox.value);
});

rightBtn.addEventListener("click", () => {
    leftArrow.classList.remove("fa-fade");
    rightArrow.classList.add("fa-fade");
    morseBox.disabled = true;
    englishBox.disabled = false;
});

leftBtn.addEventListener("click", () => {
    rightArrow.classList.remove("fa-fade");
    leftArrow.classList.add("fa-fade");
    englishBox.disabled = true;
    morseBox.disabled = false;
});

clearBtn.addEventListener("click", () => {
    if (rightArrow.classList.contains("fa-fade"))
        rightArrow.classList.remove("fa-fade");
    if (leftArrow.classList.contains("fa-fade"))
        leftArrow.classList.remove("fa-fade");
    englishBox.value = "";
    morseBox.value = "";
});
