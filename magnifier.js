import { toggleFunction } from "./main.js";

const button = document.getElementById("magnifier");
const button2 = document.getElementById("burgerMagnifier");
const input = document.getElementById("headerInput");
const input2 = document.getElementById("burgerInput");

button.addEventListener("click", toggleFunction(input, "show__input"));
button2.addEventListener("click", toggleFunction(input2, "show__input"));
