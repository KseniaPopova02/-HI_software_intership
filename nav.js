const burgerButton = document.querySelector(".button__wrapper");
const burgerNav = document.querySelector(".burger__nav-wrapper");

// const toggleNav = () => {
//   burgerNav.classList.toggle("show");
// };
// burgerButton.onclick = toggleNav;

burgerButton.addEventListener("click", (e) => {
  e.preventDefault();
  burgerNav.classList.toggle("show");
});
