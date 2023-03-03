let searchInput = document.getElementById("searchInput");
const searchTags = document.querySelectorAll(".search__tags li");

const filterList = () => {
  const filter = searchInput.value.toLowerCase();
  searchTags.forEach((item) => {
    let text = item.textContent;
    if (text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
};

searchInput.addEventListener("input", filterList);
console.log(searchInput.value);
const getItemFromLocalStorage = () => {
  return (searchInput.value = localStorage.getItem("input"));
};
console.log(getItemFromLocalStorage());

// Ты сначала меняешь value инпута, потом вешаешь на него обработчик.
// Код в js-е последовательный
