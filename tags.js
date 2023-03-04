const searchInput = document.getElementById("searchInput");
const searchTags = document.querySelectorAll(".search__tags li");

const filterList = (filter) => {
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

const getItemFromLocalStorage = () => {
  localStorage.getItem("input");
};

const savedValue = getItemFromLocalStorage();
searchInput.value = savedValue;
filterList(savedValue);

// window.addEventListener("onload", () => {
//   localStorage.clear();
// });
