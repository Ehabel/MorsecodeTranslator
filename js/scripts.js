import { engtomorse, morsetoeng } from "./translator.js";
import morseDict from "./dict.js";

const englishBox = document.querySelector(".english__textarea");
const morseBox = document.querySelector(".morse__textarea");
const rightBtn = document.querySelector(".buttons__right");
const rightArrow = document.querySelector(".fa-arrow-right");
const clearBtn = document.querySelector(".buttons__clear");
const leftBtn = document.querySelector(".buttons__left");
const leftArrow = document.querySelector(".fa-arrow-left");
const downBtn = document.querySelector(".buttons__down");
const downArrow = document.querySelector(".fa-arrow-down");
const upBtn = document.querySelector(".buttons__up");
const upArrow = document.querySelector(".fa-arrow-up");

englishBox.addEventListener("input", () => {
    morseBox.value = engtomorse(morseDict, englishBox.value);
});

morseBox.addEventListener("input", () => {
    if (morseBox.value === "") {
        englishBox.value = "";
    } else {
        englishBox.value = morsetoeng(morseDict, morseBox.value);
    }
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

downBtn.addEventListener("click", () => {
    upArrow.classList.remove("fa-fade");
    downArrow.classList.add("fa-fade");
    englishBox.disabled = false;
    morseBox.disabled = true;
});

upBtn.addEventListener("click", () => {
    downArrow.classList.remove("fa-fade");
    upArrow.classList.add("fa-fade");
    morseBox.disabled = false;
    englishBox.disabled = true;
});

clearBtn.addEventListener("click", () => {
    if (rightArrow.classList.contains("fa-fade"))
        rightArrow.classList.remove("fa-fade");
    if (leftArrow.classList.contains("fa-fade"))
        leftArrow.classList.remove("fa-fade");
    englishBox.value = "";
    morseBox.value = "";
});
