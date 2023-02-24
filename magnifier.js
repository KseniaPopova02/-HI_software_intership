const button = document.querySelector("#magnifier");
const input = document.querySelector("#headerInput");
// const burgerMenuButton = document.querySelector("#magnifier");
// const burgerInput = document.querySelector("#headerInput");

button.addEventListener("click", (e) => {
  e.preventDefault();
  input.classList.toggle("show");
});
// burgerMenuButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   burgerInput.classList.toggle("show");
// });
