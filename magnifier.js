import { toggleFunction } from "./main.js";

const button = document.getElementById("magnifier");
const button2 = document.getElementById("burgerMagnifier");
const inputHeader = document.getElementById("headerInput");
const inputBurger = document.getElementById("burgerInput");

const changePage = (e) => {
  if (e.key === "Enter") {
    e.preventDefault;
    window.location.href = "./tags.html";
  }
};

const clearInput = (input) => {
  input.value = "";
};

const addInputValueToLocalStorage = (elem) => {
  if (elem) {
    elem.value = localStorage.getItem("input") || "";
    elem.addEventListener("input", function () {
      localStorage.setItem("input", this.value);
    });
  }
  clearInput(elem);
};

document.addEventListener(
  "DOMContentLoaded",
  addInputValueToLocalStorage(inputHeader)
);

document.addEventListener(
  "DOMContentLoaded",
  addInputValueToLocalStorage(inputBurger)
);

button.addEventListener("click", toggleFunction(inputHeader, "show__input"));
button2.addEventListener("click", toggleFunction(inputBurger, "show__input"));

inputHeader.addEventListener("keypress", changePage);
inputBurger.addEventListener("keypress", changePage);
