const button = document.querySelector("#magnifier");
const input = document.querySelector("#headerInput");

const toggleNav = () => {
  input.classList.toggle("show");
};

button.onclick = toggleNav;
