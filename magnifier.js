import { toggleFunction } from "./main.js";

const button = document.getElementById("magnifier");
const button2 = document.getElementById("burgerMagnifier");
const input = document.getElementById("headerInput");
const input2 = document.getElementById("burgerInput");

const changePage = (e) => {
  if (e.key === "Enter") {
    e.preventDefault;
    window.location.href = "./tags.html";
  }
};

const getValue = () => {
  searchInput.value = input.value;
};

button.addEventListener("click", toggleFunction(input, "show__input"));
button2.addEventListener("click", toggleFunction(input2, "show__input"));

input.addEventListener("keypress", changePage);
input2.addEventListener("keypress", changePage);

input.addEventListener("input", getValue);
